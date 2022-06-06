import React, { FC } from "react";
import { IconButton } from "@mui/material";
import { themes } from "../../styles/theme";
import * as StyledThisComp from "../../styles/Header.styled";
import MenuIcon from "@mui/icons-material/Menu";

interface IHeaderContentProps {
  currentCase?: string;
  action: () => void;
}

const HeaderContent: FC<IHeaderContentProps> = ({ currentCase, action }) => {
  return (
    <>
      <StyledThisComp.Content>{currentCase}</StyledThisComp.Content>
      <StyledThisComp.ButtonWrapper>
        <IconButton
          style={{
            color: themes.colours.blue100,
            fontSize: `${themes.fontSizes.secondary}px`,
          }}
          onClick={action}
        >
          <MenuIcon color="inherit" />
        </IconButton>
      </StyledThisComp.ButtonWrapper>
    </>
  );
};

export default HeaderContent;
