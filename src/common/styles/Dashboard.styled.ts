import styled from "styled-components";

import { themes } from "./theme";

export const Container = styled.div`
  padding-bottom: 60px;
`;

export const Wrapper = styled.div`
  margin-top: 48px;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 8px 0 0;

  & span {
    font-size: ${themes.fontSizes.tertiaryMiddle}px;
  }
`;

export const WrapperTable = styled.div`
  padding: 8px;
  margin-top: 16px;
`;

export const Content = styled.span`
  padding-top: 12px;
  display: block;
  font-size: ${themes.fontSizes.basic}px;
  color: ${themes.colours.blue100};
  overflow-wrap: break-word;
  line-height: 20px;
  font-weight: 500;
`;
