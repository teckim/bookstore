import { PropTypes } from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/sass/components/progress-bar.scss';

const ProgressBar = ({ percentage }) => (
  <div className="progress-bar">
    <CircularProgressbar className="progress-bar__circle" value={percentage} />
    <div className="progress-bar__info">
      <div className="progress-bar__value">
        {percentage}
        %
      </div>
      <div className="progress-bar__status">completed</div>
    </div>
  </div>
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   viewBox="-1 -1 34 34"
  //   className="progress-bar"
  // >
  //   <circle
  //     cx="16"
  //     cy="16"
  //     r="15.9155"
  //     className="progress-bar__background"
  //   />
  //   <circle
  //     cx="16"
  //     cy="16"
  //     r="15.9155"
  //     className="progress-bar__circle"
  //   />
  // </svg>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
