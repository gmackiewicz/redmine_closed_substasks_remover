// ==UserScript==
// @name         Redmine Closed Removed From Subtasks
// @namespace    https://github.com/extstopcodepls/redmine_closed_substasks_remover
// @version      0.3
// @description  Usuwa linki z podzagadnień, które są zamknięte
// @author       Paweł Borawski
// @match        https://redmine.x-code.pl/issues/*
// @grant        none
// ==/UserScript==

function getAllRows() {
     return document
            .querySelectorAll('#issue_tree table.list.issues tr.closed');
}

function show(event) {
    var toUnblockElements = getAllRows();
    toUnblockElements.forEach(function (toUnblockElement) {
        toUnblockElement.style.display = 'table-row';
    });
    event.target.innerHTML = "Schowaj";
    event.target.onclick = hide;
}

function hide(event) {
    var toRemoveElements = getAllRows();
    toRemoveElements
        .forEach(function (closedElement) {
            closedElement.style.display = 'none';
        });
    event.target.innerHTML = "Pokaż";
    event.target.onclick = show;
}

(function() {
    'use strict';

    var toRemoveElements = getAllRows();

    var subTaskTitleElement =
        document.querySelectorAll('#issue_tree > p > strong')[0];

    subTaskTitleElement.innerHTML = subTaskTitleElement.innerHTML + " - (" + toRemoveElements.length + ") zamkniętych. ";

    var showHideElement = document.createElement("a");
    showHideElement.innerHTML = "Pokaż";
    showHideElement.href = "#";
    showHideElement.onclick = show;

    subTaskTitleElement.parentNode.insertBefore(showHideElement, subTaskTitleElement.nextSibling);

    toRemoveElements
        .forEach(function (closedElement) {
            closedElement.style.display = 'none';
        });
})();
