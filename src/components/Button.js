import { PropTypes } from 'prop-types';
import '../assets/sass/components/button.scss';

const Button = ({ buttonType, children }) => (
  <button className="button" type={buttonType}>
    <div className="button__text">
      {children}
    </div>
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Button.defaultProps = {
  buttonType: 'button',
  children: null,
};

export default Button;
