import React, { FC } from "react";
import HeaderContent from "../HeaderContent";
import * as StyledThisComp from "../../styles/Header.styled";
import * as StyledWrapper from "../../styles/Home.styled";

interface IHeaderProps {
  currentCase?: string;
  onToggle: () => void;
}

const Header: FC<IHeaderProps> = ({ currentCase, onToggle }) => {
  return (
    <>
      <StyledThisComp.Container>
        <StyledWrapper.Wrapper>
          <StyledThisComp.Row>
            <HeaderContent currentCase={currentCase} action={onToggle} />
          </StyledThisComp.Row>
        </StyledWrapper.Wrapper>
      </StyledThisComp.Container>
    </>
  );
};

export default Header;
