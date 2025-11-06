import React, { useRef, useState } from 'react';
import './MainInstagram.css';

const MainInstagram = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const [playStates, setPlayStates] = useState([false, false, false]);

  const videoData = [
    {
      src: './videos/insta_videos_01.mp4',
      username: 'lh12_e3'
    },
    {
      src: './videos/insta_videos_02.mp4', 
      username: 'lh12_e3'
    },
    {
      src: './videos/insta_videos_03.mp4',
      username: 'lh12_e3'
    }
  ];

  const handlePlayClick = (index) => {
    const video = videoRefs[index].current;
    const newPlayStates = [...playStates];

    if (video.paused) {
      video.play();
      newPlayStates[index] = true;
    } else {
      video.pause();
      newPlayStates[index] = false;
    }
    
    setPlayStates(newPlayStates);
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    // 이전 비디오 로직 구현
    console.log('Previous video clicked');
  };

  return (
    <main>
      <section className="instagram">
        <div className="instagram__content">
          <div className="title_wrap">
            <h2 className="section_title">Your Crocs. Your Splash.</h2>
            <p className="section_sub_title">스타들의 일상 속, 크록스를 만나보세요.</p>
          </div>

          <div className="instagram__video-prev">
            <a href="#" className="instagram__video-prev-link" onClick={handlePrevClick}>
              <span className="prev_line"></span>
              <span className="prev_line"></span>
              <p className="prev_text">prev</p>
            </a>
          </div>

          <div className="instagram__video-list">
            {videoData.map((video, index) => (
              <div key={index} className="instagram__video-item">
                <video 
                  ref={videoRefs[index]}
                  className="instagram__video" 
                  muted 
                  loop
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <img 
                  src="./images/icon_insta_play_2.png" 
                  alt="play_icon" 
                  className="instagram__play-icon"
                  style={{
                    opacity: playStates[index] ? '0.5' : '1',
                    filter: playStates[index] ? 'brightness(0.7)' : 'brightness(1)'
                  }}
                  onClick={() => handlePlayClick(index)}
                />
                <a href="#" className="instagram__button-wrap">
                  <button className="instagram__button">
                    @&nbsp;<span>{video.username}</span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainInstagram;