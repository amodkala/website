/**
 * Table of Contents Generator
 * 
 * Automatically generates a table of contents from h2 headings in the post,
 * and highlights the current section as the user scrolls.
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const tocContainer = document.getElementById('left-toc');
        const postContent = document.querySelector('.post-content');
        
        // Only run on pages with both TOC container and post content
        if (!tocContainer || !postContent) return;

        // Find all h2 headings in the post content
        const headings = postContent.querySelectorAll('h2');
        
        // Don't generate TOC if there are fewer than 2 headings
        if (headings.length < 2) {
            tocContainer.style.display = 'none';
            return;
        }

        // Build the TOC HTML
        const tocTitle = document.createElement('div');
        tocTitle.className = 'toc-title';
        tocTitle.textContent = 'Contents';

        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';

        headings.forEach(function(heading, index) {
            // Ensure heading has an ID for linking
            if (!heading.id) {
                heading.id = 'section-' + (index + 1);
            }

            // Create list item with link
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;
            link.setAttribute('data-heading-id', heading.id);
            
            li.appendChild(link);
            tocList.appendChild(li);
        });

        tocContainer.appendChild(tocTitle);
        tocContainer.appendChild(tocList);

        // Intersection Observer for highlighting current section
        const tocLinks = tocList.querySelectorAll('a');
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        let currentActiveLink = null;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const correspondingLink = tocList.querySelector('a[data-heading-id="' + id + '"]');
                    
                    if (correspondingLink && correspondingLink !== currentActiveLink) {
                        // Remove active class from previous link
                        if (currentActiveLink) {
                            currentActiveLink.classList.remove('active');
                        }
                        
                        // Add active class to current link
                        correspondingLink.classList.add('active');
                        currentActiveLink = correspondingLink;
                    }
                }
            });
        }, observerOptions);

        // Observe all headings
        headings.forEach(function(heading) {
            observer.observe(heading);
        });

        // Smooth scroll when clicking TOC links
        tocLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL hash without jumping
                    history.pushState(null, null, '#' + targetId);
                }
            });
        });

        // Set initial active state based on scroll position
        // (handles page load with hash or mid-page refresh)
        function setInitialActive() {
            const scrollPos = window.scrollY + window.innerHeight * 0.25;
            let activeHeading = null;
            
            headings.forEach(function(heading) {
                if (heading.offsetTop <= scrollPos) {
                    activeHeading = heading;
                }
            });
            
            if (activeHeading) {
                const link = tocList.querySelector('a[data-heading-id="' + activeHeading.id + '"]');
                if (link) {
                    link.classList.add('active');
                    currentActiveLink = link;
                }
            } else if (headings.length > 0) {
                // Default to first heading if we're at the top
                const firstLink = tocList.querySelector('a');
                if (firstLink) {
                    firstLink.classList.add('active');
                    currentActiveLink = firstLink;
                }
            }
        }

        setInitialActive();
    });
})();
