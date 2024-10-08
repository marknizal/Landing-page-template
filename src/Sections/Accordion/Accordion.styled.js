import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const AccordionList = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 0;
`;

export const AccordionHeader = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionContent = styled.div`
  padding: 15px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  border-top: 1px solid #ccc;
`;

export const AccordionIcon = styled.span`
  font-size: 12px;

  img {
    width: 14px;
  }
`;
