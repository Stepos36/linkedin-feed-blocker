// ==UserScript==
// @name         LinkedIn Feed Blocker
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Redirect LinkedIn feed to profile
// @author       You
// @match        https://www.linkedin.com/feed*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const now = Date.now();
    const lastRedirect = sessionStorage.getItem('lastLinkedInRedirect');

    // Only block if we redirected less than 1 second ago (prevents loops)
    if (lastRedirect && (now - parseInt(lastRedirect)) < 1000) {
        return;
    }

    // Redirect and store timestamp
    if (window.location.pathname.startsWith('/feed')) {
        sessionStorage.setItem('lastLinkedInRedirect', now.toString());
        window.location.replace('https://www.linkedin.com/in/me/');
    }
})();