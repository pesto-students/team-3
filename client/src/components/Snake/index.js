import React from 'react';
import styled from 'styled-components';
import './snake.css';

const SnakeDots = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: #000;
  // border: 1px solid #fff;
  z-index: 2;
  left: ${({ left }) => left + 'px'};
  top: ${({ top }) => top + 'px'};
  // transition: left 0.2s linear, top 0.2s linear;
  ${({ head }) =>
    head &&
    `
    background-color: #902828 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `}
  ${({ head, direction }) => {
    if (head) {
      switch (direction) {
        case 'LEFT':
          return `
            border-radius: 50% 0 0 50%;
            flex-direction: column;
            ${Eye} {
              justify-content: flex-start;
              align-items: center;
            }`;
        case 'RIGHT':
          return `
            border-radius: 0 50% 50% 0;
            flex-direction: column;
            ${Eye} {
              justify-content: flex-end;
              align-items: center;
            }`;
        case 'UP':
          return `
            border-radius: 50% 50% 0 0;
            flex-direction: row;
            ${Eye} {
              justify-content: center;
              align-items: flex-start;
            }`;
        case 'DOWN':
          return `
            border-radius: 0 0 50% 50%;
            flex-direction: row;
            ${Eye} {
              justify-content: center;
              align-items: flex-end;
            }`;
        default:
          return;
      }
    }
  }}
`;
const Eye = styled.div`
  border-radius: 50%;
  background: #ffffff;
  width: 9px;
  height: 9px;
  display: flex;
`;
const EyeDot = styled.div`
  border-radius: 50%;
  background: #000000;
  width: 5px;
  height: 5px;
`;
const tailRadius = (tailDot, nextDot) => {
  return tailDot[0] === nextDot[0]
    ? tailDot[1] - nextDot[1] > 0
      ? 'up-tail-border'
      : 'down-tail-border'
    : tailDot[0] - nextDot[0] > 0
    ? 'left-tail-border'
    : 'right-tail-border';
};
const bodyRadius = (presentDot, nextDot, prevDot) => {
  console.log(presentDot, nextDot, prevDot);
  if (presentDot.length > 0 && nextDot.length > 0) {
    return presentDot[0] === nextDot[0] && presentDot[0] === prevDot[0]
      ? ''
      : presentDot[1] === nextDot[1] && presentDot[1] === prevDot[1]
      ? ''
      : (presentDot[0] === nextDot[0] && nextDot[1] < prevDot[1]) ||
        (presentDot[1] === nextDot[1] && nextDot[0] < prevDot[0])
      ? 'up-right-border'
      : '';
  }
};
const Snake = ({ snakeDots, direction }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => (
        <SnakeDots
          key={i}
          left={dot[0]}
          top={dot[1]}
          tail={i === 0}
          head={i === snakeDots.length - 1}
          direction={direction}
          className={
            i === 0
              ? tailRadius(dot, snakeDots[1])
              : i === snakeDots.length - 1
              ? ''
              : '' //bodyRadius(dot, snakeDots[i + 1], snakeDots[i - 1])
          }
        >
          {i === snakeDots.length - 1 && (
            <>
              <Eye>
                <EyeDot />
              </Eye>
              <Eye>
                <EyeDot />
              </Eye>
            </>
          )}
        </SnakeDots>
      ))}
    </div>
  );
};
export default Snake;
