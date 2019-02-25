// ==UserScript==
// @name         Redmine Closed Removed From Subtasks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Usuwa linki z podzagadnień, które są zamknięte
// @author       Paweł Borawski
// @match        https://redmine.x-code.pl/issues/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document
        .querySelectorAll('#issue_tree table.list.issues tr.closed')
        .forEach(function (closedElement) {
            closedElement.remove();
        });
})();
