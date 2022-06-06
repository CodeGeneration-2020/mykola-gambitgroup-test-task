import React, { FC, ReactNode } from "react";
import * as StyledThisComp from "../../styles/Welcome.styled";

interface IWelcomeButtonProps {
  children?: ReactNode;
  actionHandler: () => void;
}

const WelcomeButton: FC<IWelcomeButtonProps> = ({
  children,
  actionHandler,
}) => {
  return (
    <StyledThisComp.Button onClick={actionHandler}>
      {children}
    </StyledThisComp.Button>
  );
};

export default WelcomeButton;
