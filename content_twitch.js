(function () {
  // Checks for ads and manipulates the video or uses skip button if present
  function handleVideoAd() {
    const video = document.querySelector("video");
    const adElement = document.querySelector("div[aria-label='Ad']");
    if (video && adElement && adElement.children.length > 0) {
      muteAndSpeedUp(video, 16.0);
    }
  }

  function muteAndSpeedUp(videoElement, playbackRate) {
    videoElement.muted = true;
    videoElement.playbackRate = playbackRate;
  }

  function initializeAdHandling() {
    handleVideoAd();

    const observer = new MutationObserver(handleVideoAd);
    observer.observe(document.body, { childList: true, subtree: true });
  }
  initializeAdHandling();
})();
