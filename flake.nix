{
  description = "Hakyll static site generator project";

  # Flake inputs
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";

  # Flake outputs
  outputs =
    { self, nixpkgs }:
    let
      # The systems supported for this flake's outputs
      supportedSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      # Helper for providing system-specific attributes
      forEachSupportedSystem =
        f:
        nixpkgs.lib.genAttrs supportedSystems (
          system:
          f {
            inherit system;
            pkgs = import nixpkgs {
              inherit system;
              config.allowUnfree = true;
            };
          }
        );
    in
    {
      # Hakyll site generator binary
      packages = forEachSupportedSystem (
        { pkgs, system }:
        let
          # Build the Hakyll site generator from the Cabal file
          generator = pkgs.haskellPackages.callCabal2nix "website" self { };

          # Build the static site by running the generator
          site = pkgs.stdenv.mkDerivation {
            name = "website-static";
            src = self;
            buildInputs = [ generator ];
            buildPhase = "${generator}/bin/site build";
            installPhase = "cp -r _site $out";
          };
        in
        {
          inherit generator;
          default = site;
          inherit site;
        }
      );

      # Development environment
      devShells = forEachSupportedSystem (
        { pkgs, system }:
        {
          default = pkgs.haskellPackages.shellFor {
            packages = p: [ (p.callCabal2nix "website" self { }) ];

            buildInputs = with pkgs; [
              # Haskell toolchain
              cabal-install
              haskell-language-server

              # Haskell development tools
              haskellPackages.hlint
              haskellPackages.fourmolu

              # Nix formatter
              nixfmt-rfc-style
            ];

            nativeBuildInputs = with pkgs; [
              # System libraries needed by Haskell dependencies
              zlib
              zlib.dev
            ];
          };
        }
      );

      # Apps
      apps = forEachSupportedSystem (
        { pkgs, system }:
        {
          # nix run .#publish - builds site and copies to public/
          publish = {
            type = "app";
            program = toString (
              pkgs.writeShellScript "publish" ''
                rm -rf public
                cp -rL ${self.packages.${system}.site} public
                chmod -R u+w public
              ''
            );
          };

          # nix run .#watch - starts dev server with live reload
          watch = {
            type = "app";
            program = toString (
              pkgs.writeShellScript "watch" ''
                ${self.packages.${system}.generator}/bin/site watch
              ''
            );
          };
        }
      );

      # Nix formatter
      formatter = forEachSupportedSystem ({ pkgs, ... }: pkgs.nixfmt-rfc-style);
    };
}
