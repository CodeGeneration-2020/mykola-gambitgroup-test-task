import React, { FC } from "react";
import { getDifferenceBetweenArrays } from "../../../utils/additional";
import * as StyledTextMenu from "../../styles/TextMenu.styled";
import { DataOptionType } from "../../types/parser.types";

interface INotificationProps {
  parsedData?: DataOptionType;
}

const Notification: FC<INotificationProps> = ({ parsedData }) => {
  return (
    <StyledTextMenu.InformationWrapper>
      <StyledTextMenu.StatusDescription>
        status:{" "}
      </StyledTextMenu.StatusDescription>
      <StyledTextMenu.StatusContent>
        {getDifferenceBetweenArrays(parsedData)}
      </StyledTextMenu.StatusContent>
    </StyledTextMenu.InformationWrapper>
  );
};

export default Notification;
