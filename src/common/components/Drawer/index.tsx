import React, { FC } from "react";
import { themes } from "../../styles/theme";
import { IParsedData } from "../../types/parser.types";
import DrawerWrapper from "../DrawerWrapper";
import * as StyledThisComp from "../../styles/Drawer.styled";

interface IDrawerProps {
  parsedData?: IParsedData;
  currentStep: number;
  isOpen: boolean;
  onToggle: () => void;
  onLogout: () => void;
  onChangeStep: (newStep: number) => void;
}

const Drawer: FC<IDrawerProps> = ({
  parsedData,
  currentStep,
  isOpen,
  onToggle,
  onLogout,
  onChangeStep,
}) => {
  const isFullPackData =
    Object.values((parsedData as IParsedData)?.data).length === 100;

  const protectedNavigationTabs = isFullPackData
    ? [
        { label: "Converted data", currentStep: 2 },
        { label: "Graphical representation", currentStep: 3 },
      ]
    : [];

  const tabItems = [
    { label: "Text representation", currentStep: 0 },
    { label: "Input data", currentStep: 1 },
    ...protectedNavigationTabs,
  ];

  return (
    <DrawerWrapper anchor="right" onToggle={onToggle} isOpen={isOpen}>
      <StyledThisComp.DrawerContent>
        {parsedData?.date}
      </StyledThisComp.DrawerContent>

      <StyledThisComp.TabWrapper>
        {tabItems.map(({ currentStep: stepOfMenu, label }) => (
          <StyledThisComp.TabItem
            key={label}
            style={{
              borderLeft:
                currentStep === stepOfMenu
                  ? `4px solid ${themes.colours.blue100}`
                  : `4px solid transparent`,
            }}
            onClick={() => onChangeStep(stepOfMenu)}
          >
            <StyledThisComp.TabContent>{label}</StyledThisComp.TabContent>
          </StyledThisComp.TabItem>
        ))}
      </StyledThisComp.TabWrapper>

      <StyledThisComp.ButtonRow>
        <StyledThisComp.ButtonAction variant="text" onClick={onLogout}>
          log out
        </StyledThisComp.ButtonAction>
      </StyledThisComp.ButtonRow>
    </DrawerWrapper>
  );
};

export default Drawer;
