import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Section.styled';

const Section = ({ title, children }) => (
  <Wrapper>
    <h2>{title}</h2>
    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
