// ==UserScript==
// @name         Autoplay Audio For AnkiWeb
// @namespace    popyoung
// @version      0.1
// @description  A js almost written by ChatGPT
// @author       popyoung
// @match        https://ankiuser.net/study/
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    //Thanks to ChatGPT
    var checkBtn = setInterval(function() {
        //wait for loading
        var btn = document.getElementsByClassName("btn btn-secondary");
        if (btn.length > 0) {
            clearInterval(checkBtn);
            var audioElements = document.getElementsByTagName("audio");
            var currentAudio = 0;
            function playNextAudio() {
                if (currentAudio < audioElements.length) {
                    audioElements[currentAudio].play();
                    audioElements[currentAudio].addEventListener("ended", function() {
                        currentAudio++;
                        playNextAudio();
                    });
                }
            }
            playNextAudio();
        }
    }, 100);

})();
