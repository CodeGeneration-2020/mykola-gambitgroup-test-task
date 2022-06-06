import styled from "styled-components";
import { themes } from "./theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Row = styled.div``;

export const ContentWrapper = styled.div`
  background-color: ${themes.colours.orange300};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: ${themes.fontSizes.fourfold}px;
  color: ${themes.colours.blue100};
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: ${themes.fontSizes.tertiary}px;
  }
`;

export const RowActions = styled.div`
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 16px 24px;
  border-radius: 4px;
  min-width: 200px;
  margin: 8px;
  border: 1px solid ${themes.colours.orange100};
  background: ${themes.colours.orange100};
  color: ${themes.colours.white};
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: 250ms ease-in;

  &:hover {
    background: ${themes.colours.orange200};
    border-color: ${themes.colours.orange200};
  }
`;

export const ButtonAdditional = styled.span`
  text-transform: none;
  font-size: ${themes.fontSizes.secondaryMiddle}px;
`;

export const ErrorMessage = styled.span`
  font-size: ${themes.fontSizes.basic}px;
  color: ${themes.colours.blue100};
  padding-top: 24px;
`;
