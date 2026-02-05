// ==UserScript==
// @name         LinkedIn Feed Blocker
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Redirect LinkedIn feed to profile
// @author       You
// @match        https://www.linkedin.com/feed*
// @match        https://www.linkedin.com/feed/
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Immediate redirect before page loads
    if (window.location.href.includes('/feed')) {
        window.location.replace('https://www.linkedin.com/in/me/');
    }
    
    // Backup check every 100ms
    const interval = setInterval(function() {
        if (window.location.href.includes('/feed')) {
            window.location.replace('https://www.linkedin.com/in/me/');
        }
    }, 100);
    
    // Block scrolling if somehow still on feed
    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.href.includes('/feed')) {
            document.body.style.overflow = 'hidden';
            window.location.replace('https://www.linkedin.com/in/me/');
        }
    });
})();