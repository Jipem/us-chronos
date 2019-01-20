/* global $: true */

// ==UserScript==
// @name         Chronos
// @namespace    https://www.jipem.me
// @version      1.0
// @description  Tampermonkey - Quelques modifications de l'interface Chronos
// @author       Jean-Pierre MÉRESSE
// @match        https://chronos.chu-montpellier.fr/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    var autoDemarrage = false;
    var afficheButton = true;
    var colorMatin = '#ade8ff';
    var colorAprem = '#00baff';
    var colorNuit = '#a3bcc6';

    // Fonction : Mise en page
    function changeColor() {
       $("span.fc-event-title:contains('07:00-14:30')").addClass('matin');
       $("span.fc-event-title:contains('07:00-14:30')").css('background-color', colorMatin);
       $("span.fc-event-title:contains('07:00-14:30')").css('textAlign', 'left');
       $("span.fc-event-title:contains('07:00-14:30')").css('display', 'block');
       $("span.fc-event-title:contains('14:00-21:30')").addClass('aprem');
       $("span.fc-event-title:contains('14:00-21:30')").css('background-color', colorAprem);
       $("span.fc-event-title:contains('14:00-21:30')").css('textAlign', 'right');
       $("span.fc-event-title:contains('14:00-21:30')").css('display', 'block');
       $("span.fc-event-title:contains('21:15-07:15')").addClass('nuit');
       $("span.fc-event-title:contains('21:15-07:15')").css('background-color', colorNuit);
       $("span.fc-event-title:contains('21:15-07:15')").css('textAlign', 'center');
       $("span.fc-event-title:contains('21:15-07:15')").css('display', 'block');
    }

    // Créer bouton Refresh
    function createButton() {
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("Refresh");
        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.id = "btnrefresh";
        $("#btnrefresh").css('zIndex', '100000');
        $("#btnrefresh").css({ 'position': 'absolute' });
        $("#btnrefresh").css({ 'margin-top': '8px' });
        $("#btnrefresh").css({ 'margin-left': '50px' });
    }

    // Démarrage
    if (autoDemarrage == true) { setInterval(changeColor, 1000); }
    if (afficheButton == true) { createButton(); }

    // Refresh par bouton
    $("#btnrefresh").click(function() {
        changeColor();
    });

})();
