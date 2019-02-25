// ==UserScript==
// @name         Redmine Closed Removed From Subtasks
// @namespace    https://github.com/extstopcodepls/redmine_closed_substasks_remover
// @version      0.5
// @description  Usuwa linki z podzagadnień, które są zamknięte
// @author       Paweł Borawski
// @match        https://redmine.x-code.pl/issues/*
// @grant        none
// ==/UserScript==

function getAllSubtasksRows() {
     return document
            .querySelectorAll('#issue_tree table.list.issues tr.closed');
}

function showSubtasks(event) {
    var toUnblockElements = getAllSubtasksRows();
    toUnblockElements.forEach(function (toUnblockElement) {
        toUnblockElement.style.display = 'table-row';
    });
    event.target.innerHTML = "Schowaj";
    event.target.onclick = hideSubtasks;
}

function hideSubtasks(event) {
    var toRemoveElements = getAllSubtasksRows();
    toRemoveElements
        .forEach(function (closedElement) {
            closedElement.style.display = 'none';
        });
    event.target.innerHTML = "Pokaż";
    event.target.onclick = showSubtasks;
}

function setupSubtasks() {
    var toRemoveElements = getAllSubtasksRows();

    var subTaskTitleElement =
        document.querySelectorAll('#issue_tree > p > strong')[0];

    subTaskTitleElement.innerHTML = subTaskTitleElement.innerHTML + " - " + toRemoveElements.length + " zamkniętych. ";

    var showHideElement = document.createElement("a");
    showHideElement.innerHTML = "Pokaż";
    showHideElement.style.cursor = "pointer";
    showHideElement.onclick = showSubtasks;

    subTaskTitleElement.parentNode.insertBefore(showHideElement, subTaskTitleElement.nextSibling);

    toRemoveElements
        .forEach(function (closedElement) {
            closedElement.style.display = 'none';
        });
}

function getAllCorrelatedTasksRows() {
     return document
            .querySelectorAll('#relations table.list.issues tr.closed');
}

function showCorrelatedTasks(event) {
    var toUnblockElements = getAllCorrelatedTasksRows();
    toUnblockElements.forEach(function (toUnblockElement) {
        toUnblockElement.style.display = 'table-row';
    });
    event.target.innerHTML = "Schowaj";
    event.target.onclick = hideCorrelatedTasks;
}

function hideCorrelatedTasks(event) {
    var toRemoveElements = getAllCorrelatedTasksRows();
    toRemoveElements
        .forEach(function (closedElement) {
            closedElement.style.display = 'none';
        });
    event.target.innerHTML = "Pokaż";
    event.target.onclick = showCorrelatedTasks;
}

function setupCorrelatedTasks() {

    var toRemoveElements = getAllCorrelatedTasksRows();

    var subTaskTitleElement =
        document.querySelectorAll('#relations > p > strong')[0];

    subTaskTitleElement.innerHTML = subTaskTitleElement.innerHTML + " - " + toRemoveElements.length + " zamkniętych. ";

    var showHideElement = document.createElement("a");
    showHideElement.innerHTML = "Pokaż";
    showHideElement.style.cursor = "pointer";
    showHideElement.onclick = showCorrelatedTasks;

    subTaskTitleElement.parentNode.insertBefore(showHideElement, subTaskTitleElement.nextSibling);

    toRemoveElements
        .forEach(function (closedElement) {
            closedElement.style.display = 'none';
        });
}

(function() {
    'use strict';

    setupSubtasks();

    setupCorrelatedTasks();
})();
