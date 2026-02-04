// ==UserScript==
// @name         LinkedIn Feed Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirect LinkedIn feed to profile
// @author       You
// @match        https://www.linkedin.com/feed*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location.replace('https://www.linkedin.com/in/me/');
})();