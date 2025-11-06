import React, { useRef, useState, useEffect } from 'react';
import './MainInstagram.css';

interface VideoData {
  src: string;
  username: string;
}

const MainInstagram: React.FC = () => {
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const [playStates, setPlayStates] = useState<boolean[]>([false, false, false]);

  const videoData: VideoData[] = [
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

  const handlePlayClick = (index: number): void => {
    const video = videoRefs[index].current;
    if (!video) return;

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

  const handlePrevClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    // 이전 비디오 로직 구현
    console.log('Previous video clicked');
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, username: string): void => {
    e.preventDefault();
    // Instagram 프로필 페이지로 이동하는 로직
    window.open(`https://instagram.com/${username}`, '_blank');
  };

  // 컴포넌트 언마운트 시 모든 비디오 정지
  useEffect(() => {
    return () => {
      videoRefs.forEach(ref => {
        if (ref.current) {
          ref.current.pause();
        }
      });
    };
  }, []);

  return (
    <main>
      <section className="instagram">
        <div className="instagram__content">
          <div className="title_wrap">
            <h2 className="section_title">Your Crocs. Your Splash.</h2>
            <p className="section_sub_title">스타들의 일상 속, 크록스를 만나보세요.</p>
          </div>

          <div className="instagram__video-prev">
            <a 
              href="#" 
              className="instagram__video-prev-link" 
              onClick={handlePrevClick}
              aria-label="이전 비디오"
            >
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
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img 
                  src="./images/icon_insta_play_2.png" 
                  alt="재생 버튼" 
                  className="instagram__play-icon"
                  style={{
                    opacity: playStates[index] ? '0.5' : '1',
                    filter: playStates[index] ? 'brightness(0.7)' : 'brightness(1)'
                  }}
                  onClick={() => handlePlayClick(index)}
                />
                <a 
                  href="#" 
                  className="instagram__button-wrap"
                  onClick={(e) => handleButtonClick(e, video.username)}
                  aria-label={`${video.username} 인스타그램 프로필 보기`}
                >
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