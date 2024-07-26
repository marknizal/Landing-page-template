import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

export const Title = styled.h1`
  ${BREAKPOINTS.MOBILE} {
    padding: 0 20px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

export const CarouselImage = styled.img`
  width: 300px;
  height: auto;
  margin: 0 5px;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  opacity: 70%;
  color: black;
  border: none;
  padding: 7px 11px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;

  &:focus {
    outline: none;
  }
`;

export const PrevButton = styled(Button)`
  left: 100px;

  ${BREAKPOINTS.MOBILE} {
    left: 20px;
  }
`;

export const NextButton = styled(Button)`
  right: 100px;

  ${BREAKPOINTS.MOBILE} {
    right: 20px;
  }
`;
