import { Button, Drawer, MenuItem } from "@mui/material";
import styled from "styled-components";
import { themes } from "./theme";

export const DrawerContainer = styled(Drawer)`
  & .MuiPaper-root {
    min-width: 20%;
  }
`;

export const DrawerWrapper = styled.div`
  background-color: ${themes.colours.orange300};
  min-height: 100vh;
  width: 100%;
`;

export const DrawerContent = styled.span`
  display: flex;
  justify-content: center;
  margin: 12px auto;
  font-size: ${themes.fontSizes.tertiary}px;
`;

export const TabWrapper = styled.div`
  margin-top: 24px;
`;

export const TabItem = styled(MenuItem)``;

export const TabContent = styled.span`
  width: 100%;
  font-size: ${themes.fontSizes.tertiaryQuarter}px;
  color: ${themes.colours.blue100};
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

export const ButtonAction = styled(Button)`
  &.MuiButton-root {
    width: 90%;
    color: ${themes.colours.blue100};
  }
`;
