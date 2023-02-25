import React from 'react';
import PropTypes from 'prop-types';
import { BlockButton } from './BlockButton.styled';
import { Button } from './Button.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BlockButton>
    {options.map(option => (
      <Button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </BlockButton>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
