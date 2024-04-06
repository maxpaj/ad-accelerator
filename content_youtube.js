(function () {
  // Checks for ads and manipulates the video or uses skip button if present
  function handleVideoAd() {
    const videoElement = document.querySelector("video");
    const adElement = document.querySelector(".video-ads.ytp-ad-module");

    if (videoElement && adElement && adElement.children.length > 0) {
      videoElement.muted = true;
      videoElement.playbackRate = 16.0;
    } else {
      videoElement.muted = false;
      videoElement.playbackRate = 1.0;
    }

    // Skip button seems to be acessible at initialization, if its ever present
    const skipButton = document.querySelector(
      ".ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button"
    );

    if (skipButton) {
      skipButton.click();
    }
  }

  function initializeAdHandling() {
    handleVideoAd();

    const observer = new MutationObserver(handleVideoAd);
    observer.observe(document.body, { childList: true, subtree: true });
  }
  initializeAdHandling();
})();
