// ==UserScript==
// @name         Redmine Closed Removed From Subtasks
// @namespace    https://github.com/extstopcodepls/redmine_closed_substasks_remover
// @version      0.2
// @description  Usuwa linki z podzagadnień, które są zamknięte
// @author       Paweł Borawski
// @match        https://redmine.x-code.pl/issues/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var toRemoveElements =
        document
            .querySelectorAll('#issue_tree table.list.issues tr.closed');

    var subTaskTitleElement =
        document.querySelectorAll('#issue_tree > p > strong')[0];

    subTaskTitleElement.innerHTML = subTaskTitleElement.innerHTML + " - (" + toRemoveElements.length + ") zamkniętych.";

    toRemoveElements
        .forEach(function (closedElement) {
            closedElement.remove();
        });
})();
