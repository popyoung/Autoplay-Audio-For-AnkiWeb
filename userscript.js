// ==UserScript==
// @name         Autoplay Audio For AnkiWeb
// @namespace    popyoung
// @version      1.00
// @description  A js almost written by ChatGPT
// @author       popyoung
// @match        https://ankiuser.net/study/
// @grant        none
// @license MIT
// ==/UserScript==




(function () {
    'use strict';

    //Thanks to ChatGPT
    var checkBtn = setInterval(function () {
        var audioElements = document.getElementsByTagName("audio");
        var currentAudio = 0;
        var playNextAudio = function () {
            if (currentAudio < audioElements.length) {
                if (!audioElements[currentAudio].className.includes("played")) {
                    audioElements[currentAudio].play();
                    audioElements[currentAudio].className += " played";
                    audioElements[currentAudio].addEventListener("ended", function () {
                        currentAudio++;
                        playNextAudio();
                    });
                }
            }
        }
        playNextAudio();
    }, 200);
})();

