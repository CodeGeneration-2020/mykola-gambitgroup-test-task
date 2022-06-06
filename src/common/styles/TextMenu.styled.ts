import styled from "styled-components";
import { themes } from "./theme";

export const Wrapper = styled.div`
  padding: 8px 16px;
  margin-top: 16px;
`;

export const Content = styled.span``;

export const StatusDescription = styled.span`
  text-transform: uppercase;
  font-size: ${themes.fontSizes.tertiaryQuarter}px;
`;

export const StatusContent = styled.span`
  padding-top: 12px;
  display: block;
  font-size: ${themes.fontSizes.basic}px;
  color: ${themes.colours.blue100};
  overflow-wrap: break-word;
  line-height: 20px;
  font-weight: 500;
`;

export const InformationWrapper = styled.div`
  padding-top: 24px;
`;
