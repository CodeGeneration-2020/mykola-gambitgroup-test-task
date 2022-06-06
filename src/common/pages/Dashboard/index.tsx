import React, { FC } from "react";
import Drawer from "../../components/Drawer";
import { useRedirectDashboard } from "../../hooks/useRedirectDashboard";
import { IParsedData } from "../../types/parser.types";
import * as StyledThisComp from "../../styles/Dashboard.styled";

interface IDashboardProps {
  assetData?: string | null;
  parsedData?: IParsedData | null;
  currentStep: number;
  isOpen: boolean;
  onChangeStep: (newStep: number) => void;
  onToggle: () => void;
  onLogout: () => void;
}

const Dashboard: FC<IDashboardProps> = ({
  assetData,
  parsedData,
  currentStep,
  isOpen,
  onChangeStep,
  onToggle,
  onLogout,
}) => {
  const isFullPackData =
    Object.values((parsedData as IParsedData)?.data).length === 100;

  const menu = useRedirectDashboard(
    currentStep,
    parsedData,
    assetData,
    isFullPackData
  );

  return (
    <>
      <StyledThisComp.Container>
        <StyledThisComp.Wrapper>
          <Drawer
            currentStep={currentStep}
            onChangeStep={onChangeStep}
            isOpen={isOpen}
            parsedData={parsedData as IParsedData}
            onToggle={onToggle}
            onLogout={onLogout}
          />
          {menu}
        </StyledThisComp.Wrapper>
      </StyledThisComp.Container>
    </>
  );
};

export default Dashboard;
