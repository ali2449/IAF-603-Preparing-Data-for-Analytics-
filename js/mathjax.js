// mathjax.js - Configuration for MathJax to render LaTeX equations

window.MathJax = {
    tex: {
        // Enable inline and display math delimiters
        inlineMath: [['\\(', '\\)']],
        displayMath: [['$$', '$$']],
        // Support common LaTeX environments
        tags: 'ams', // Automatic numbering for equations
        packages: ['base', 'ams'], // Include AMS for align, equation, etc.
        processEnvironments: true, // Process LaTeX environments like align, equation
        processRefs: true // Process \ref and other references
    },
    chtml: {
        // Ensure equations scale appropriately with surrounding text
        scale: 1.0,
        minScale: 0.8,
        matchFontHeight: true,
        // Center display equations
        displayAlign: 'center',
        displayIndent: '0em'
    },
    options: {
        // Skip HTML classes that shouldn't be processed
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        // Process HTML classes explicitly marked for MathJax
        processHtmlClass: 'math',
        // Ignore other HTML classes
        ignoreHtmlClass: '.*'
    },
    startup: {
        // Speed up rendering by specifying ready function
        pageReady: () => {
            return MathJax.startup.defaultPageReady();
        }
    }
};

// Optional: Log to console to confirm MathJax is loaded (useful for debugging)
console.log('MathJax configuration loaded.');