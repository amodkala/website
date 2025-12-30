--------------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}

import Data.Monoid (mappend)
import Hakyll
import Text.Pandoc.Options
import Text.Pandoc.SideNote (usingSideNotes)

--------------------------------------------------------------------------------
main :: IO ()
main = hakyll $ do
  match "images/*" $ do
    route idRoute
    compile copyFileCompiler

  match "css/*" $ do
    route idRoute
    compile compressCssCompiler

  match "js/*" $ do
    route idRoute
    compile copyFileCompiler

  match "posts/*" $ do
    route $ setExtension "html"
    compile $
      customPandocCompiler
        >>= loadAndApplyTemplate "templates/post.html" postCtx
        >>= loadAndApplyTemplate "templates/default.html" postCtx
        >>= relativizeUrls

  match "blog.html" $ do
    route idRoute
    compile $ do
      posts <- recentFirst =<< loadAll "posts/*"
      let blogCtx =
            listField "posts" postCtx (return posts)
              `mappend` defaultContext

      getResourceBody
        >>= applyAsTemplate blogCtx
        >>= loadAndApplyTemplate "templates/default.html" blogCtx
        >>= relativizeUrls

  match "index.html" $ do
    route idRoute
    compile $
      getResourceBody
        >>= loadAndApplyTemplate "templates/default.html" defaultContext
        >>= relativizeUrls

  match "templates/*" $ compile templateBodyCompiler

--------------------------------------------------------------------------------
-- Custom Pandoc compiler with sidenotes and KaTeX math support
customPandocCompiler :: Compiler (Item String)
customPandocCompiler =
  pandocCompilerWithTransform
    defaultHakyllReaderOptions
    writerOptions
    usingSideNotes
  where
    writerOptions =
      defaultHakyllWriterOptions
        { writerHTMLMathMethod = KaTeX ""
        }

--------------------------------------------------------------------------------
-- Post context: reads date from frontmatter metadata
postCtx :: Context String
postCtx =
  dateField "date" "%B %e, %Y"
    `mappend` modificationTimeField "updated" "%B %e, %Y"
    `mappend` defaultContext
