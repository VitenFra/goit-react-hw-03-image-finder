import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {    
    return(
    <button type='button' onClick={onClick} className= {styles.Button}>
        Завантажити ще
    </button>
)}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,    
  };
export default Button;