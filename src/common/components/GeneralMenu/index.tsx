import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Dashboard.styled";
import * as StyledHome from "../../styles/Home.styled";
import * as StyledTextMenu from "../../styles/TextMenu.styled";
import { DataOptionType } from "../../types/parser.types";
import TableHeader from "../Table/TableHeader";
import TableRow from "../Table/TableRow";

interface IGeneralMenuProps {
  parsedData: DataOptionType;
}

const GeneralMenu: FC<IGeneralMenuProps> = ({ parsedData }) => {
  const arrayAssets = Object.entries(parsedData);

  return (
    <StyledThisComp.WrapperTable>
      <StyledHome.Title>Input data</StyledHome.Title>
      {arrayAssets.length ? (
        <>
          <TableHeader itemsMenu={["Register", "Values"]} />
          {arrayAssets.map(([key, value], idx) => (
            <TableRow key={idx} asset={[key, value.toString()]} />
          ))}
        </>
      ) : (
        <>
          <StyledTextMenu.StatusDescription>
            status:{" "}
          </StyledTextMenu.StatusDescription>
          <StyledThisComp.Content>
            Alas, you have not entered any data
          </StyledThisComp.Content>
        </>
      )}
    </StyledThisComp.WrapperTable>
  );
};

export default GeneralMenu;
