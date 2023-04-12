const videos = document.querySelectorAll(".video-container video");
const close = document.querySelector(".popup-video span");
const popupContainer = document.querySelector(".popup-video");
const popupVideo = popupContainer.querySelector("video");

videos.forEach(video => {
  video.onclick = () => {
    popupContainer.style.display = "block";
    popupVideo.src = video.getAttribute("src");
  };
});

close.onclick = () => {
  popupContainer.style.display = "none";
};