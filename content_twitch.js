(function () {
  // Checks for ads and manipulates the video or uses skip button if present
  function handleVideoAd() {
    const video = document.querySelector("video");
    const adElement = document.querySelector("div[aria-label='Ad']");
    if (video && adElement && adElement.children.length > 0) {
      videoElement.muted = true;
      videoElement.playbackRate = 16.0;
    } else {
      videoElement.muted = false;
      videoElement.playbackRate = 1.0;
    }
  }

  function initializeAdHandling() {
    handleVideoAd();

    const observer = new MutationObserver(handleVideoAd);
    observer.observe(document.body, { childList: true, subtree: true });
  }
  initializeAdHandling();
})();
