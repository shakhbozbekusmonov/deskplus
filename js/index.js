"use strict";

let video = document.getElementById("video"),
  play = document.getElementById("play");

play.addEventListener("click", () => {
  play.classList.toggle("play__dsp-none");
  video.play();
  video.controls = "true";
});

video.addEventListener("click", () => {
  if (!video.paused) {
    play.classList.remove("play__dsp-none");
    video.paused();
    video.controls = "false";
  }
});