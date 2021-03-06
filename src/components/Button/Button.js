import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ nameBtn, onLeaveFeedback }) => {
  return (
    <button
      className={styles.button}
      onClick={() => onLeaveFeedback(nameBtn)}
      type="button"
    >
      {nameBtn}
    </button>
  );
};

Button.propTypes = {
  nameBtn: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

export default Button;
