window.addEventListener("DOMContentLoaded", () => {
  ("use strict");

  // Put variables in global scope to make them available to the browser console.
  var video = document.querySelector("video");
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  var constraints = (window.constraints = {
    video: true,
    audio: false,
  });

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      var videoTracks = stream.getVideoTracks();
      console.log("Got stream with constraints:", constraints);
      console.log("Using video device: " + videoTracks[0].label);
      stream.onremovetrack = function () {
        console.log("Stream ended");
      };
      window.stream = stream; // make variable available to browser console
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log({ error });
    });

  //   let camera_button = document.querySelector("#start-camera");
  //   camera_button.addEventListener("click", async function () {
  //     let stream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: false,
  //     });
  //     video.srcObject = stream;
  //   });
});
