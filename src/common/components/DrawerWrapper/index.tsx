import React, { FC, ReactNode } from "react";
import * as StyledThisComp from "../../styles/Drawer.styled";

interface IDrawerProps {
  children?: ReactNode;
  anchor: "right";
  isOpen: boolean;
  onToggle: () => void;
}

const DrawerWrapper: FC<IDrawerProps> = ({
  children,
  anchor,
  isOpen,
  onToggle,
}) => {
  return (
    <StyledThisComp.DrawerContainer
      anchor={anchor}
      open={isOpen}
      onClose={onToggle}
    >
      <StyledThisComp.DrawerWrapper>{children}</StyledThisComp.DrawerWrapper>
    </StyledThisComp.DrawerContainer>
  );
};

export default DrawerWrapper;
