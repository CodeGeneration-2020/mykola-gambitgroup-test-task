import styled from "styled-components";
import { IContentHeaderProps } from "../types/styles.types";
import { themes } from "./theme";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${themes.colours.orange300};
  position: relative;
  z-index: 1;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

export const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.span`
  font-size: ${themes.fontSizes.tertiary}px;
  color: ${themes.colours.blue100};
  font-weight: 500;

  &:first-letter {
    font-size: ${({ capitalize }: IContentHeaderProps) =>
      capitalize && `${themes.fontSizes.fourfoldQuarter}px`};
    font-weight: ${({ capitalize }: IContentHeaderProps) => capitalize && 700};
  }
`;
