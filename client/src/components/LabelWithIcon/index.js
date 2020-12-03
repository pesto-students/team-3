import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ fontFamily }) =>
    fontFamily ? ` var(--ff-${fontFamily})` : 'var(--ff-primary)'};
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  font-size: ${({ fontSize }) => fontSize || '2.75rem'};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  text-transform: uppercase;
  color: ${({ color }) => color || 'green'};
  justify-content: ${({ content }) => content || 'center'};
`;

const BigText = styled.h2`
  text-align: center;
  font-size: ${({ fontSize }) => fontSize || '2.75rem'};
  @media (max-width: 500px) {
    font-size: ${({ fontSize }) => fontSize || '3rem'} !important;
  }
`;
const ImageIcon = styled.img`
  width: ${({ width }) => width || 'auto'};
  ${({ label }) => label && 'margin-right: 10px'};
  @media (max-width: 500px) {
    ${({ label }) => label && 'margin-right: 5px'};
  }
`;
const LabelWithText = ({ label, icon, ...props }) => {
  const IconWithImage = (icon) => {
    let url = '';
    switch (icon) {
      default:
        url = '';
    }
    return url;
  };
  return (
    <Div {...props}>
      {icon && (
        <ImageIcon
          src={IconWithImage(icon)}
          alt={icon}
          {...props}
          label={label}
        />
      )}
      {label && (
        <BigText {...props} url={IconWithImage(icon)}>
          {label}
        </BigText>
      )}
    </Div>
  );
};

export default LabelWithText;
