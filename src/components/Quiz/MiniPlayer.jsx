import { useRef, useState } from 'react';
import './styles/MiniPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

const MiniPlayer = ({ id, title }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(`floatingBtn`);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(`floatingBtn`);
      setStatus(false);
    }
  }
  return (
    <div className="miniPlayer floatingBtn" ref={buttonRef} onClick={toggleMiniPlayer}>
      <span className="open"><FontAwesomeIcon icon={faCirclePlay} /></span>
      <span className="close" onClick={toggleMiniPlayer}><FontAwesomeIcon icon={faXmark} /></span>
      <ReactPlayer url={videoUrl} height="168px" width="300px" playing={status} controls />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;