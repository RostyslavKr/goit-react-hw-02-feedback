import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Text.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <Text>Good: {good}</Text>
    <Text>Neutral: {neutral}</Text>
    <Text>Bad: {bad}</Text>
    <Text>Total: {total}</Text>
    <Text>Positive feedback: {positivePercentage}%</Text>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
