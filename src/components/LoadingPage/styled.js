import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DotsAnimation = keyframes`
  0% { transform: translateY(-23%); }
  50% { transform: translateY(23%); }
  100% { transform: translateY(-23%); }
`;

export const DotElement = styled.div`
  border-radius: 100%;
  height: 1rem;
  width: 1rem;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  animation-name: ${DotsAnimation};
  transform: translateY(-23%);

  &:nth-child(1) {
    color: #4285f4;
    animation-delay: calc(1 * 0.15s);
    background: #4285f4;
  }

  &:nth-child(2) {
    color: #ea4335;
    animation-delay: calc(2 * 0.15s);
    background: #ea4335;
  }

  &:nth-child(3) {
    color: #fbbc05;
    animation-delay: calc(3 * 0.15s);
    background: #fbbc05;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
