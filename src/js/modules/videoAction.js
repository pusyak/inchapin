const videoAction = () => {
  const video = '.video-action__video'

  playVideo(getVideo(video))
  stopVideo(getVideo(video))
}

const playVideo = (video) => {
  const activeClass = 'video-action__video--active';

  document.querySelector('.video-action__button').addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullScreen) {
      video.msRequestFullScreen();
    }

    video.currentTime = '0';
    video.classList.add(activeClass)
    video.play()
  });
}

const stopVideo = (video) => {
  const activeClass = 'video-action__video--active';
  const exitHandler = () => {
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      video.pause()
      video.classList.remove(activeClass)
      video.currentTime = '0';
    }
  }

  document.addEventListener('fullscreenchange', exitHandler);
  document.addEventListener('mozfullscreenchange', exitHandler);
  document.addEventListener('MSFullscreenChange', exitHandler);
  document.addEventListener('webkitfullscreenchange', exitHandler);
}

const getVideo = (selector) => {
  return document.querySelector(selector);
}

export default videoAction