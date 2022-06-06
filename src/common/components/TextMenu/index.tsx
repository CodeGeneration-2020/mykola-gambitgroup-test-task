import React, { FC } from "react";
import { DataOptionType } from "../../types/parser.types";
import Notification from "../Notification";
import * as StyledThisComp from "../../styles/TextMenu.styled";
import * as StyledHome from "../../styles/Home.styled";

interface ITextMenuProps {
  textData: string;
  parsedData: DataOptionType;
  isFullPack?: boolean;
}

const TextMenu: FC<ITextMenuProps> = ({ textData, parsedData, isFullPack }) => {
  return (
    <StyledThisComp.Wrapper>
      <StyledHome.Title>Text representation</StyledHome.Title>
      <StyledThisComp.Content>{textData}</StyledThisComp.Content>
      {isFullPack ? <Notification /> : <Notification parsedData={parsedData} />}
    </StyledThisComp.Wrapper>
  );
};

export default TextMenu;
