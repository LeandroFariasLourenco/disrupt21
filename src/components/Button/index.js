import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({ text, children, ...props }) => (
  <S.ButtonWrapper
    title={text}
    {...props}
  >
    <S.ButtonTitle>
      {text}
      {children}
    </S.ButtonTitle>
  </S.ButtonWrapper>
);

Button.defaultProps = {
  text: '',
  children: <></>,
};

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default Button;
