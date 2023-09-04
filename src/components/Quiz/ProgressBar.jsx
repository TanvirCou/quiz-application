import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/ProgressBar.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const ProgressBar = ({ next, prev, submit, progress }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className="progressBar">
      <div className="backButton" onClick={prev}>
        <span ><FontAwesomeIcon icon={faArrowLeft} /> </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip" ref={tooltipRef}>{progress}% Complete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: `${progress}%` }} onMouseOver={toggleTooltip} onMouseOut={toggleTooltip}></div>
        </div>
      </div>
      <button className="button-next next" onClick={progress === 100 ? submit : next}>
        <span>{progress === 100 ? 'Submit Quiz' : 'Next Question'}</span>
        <span > <FontAwesomeIcon icon={faArrowRight} /> </span>
      </button>
    </div>
  );
};

export default ProgressBar;