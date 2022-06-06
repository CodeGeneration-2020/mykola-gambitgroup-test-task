import React, { FC } from "react";
import { arrOptions } from "../../assets/consts/variables";
import * as StyledThisComp from "../../styles/Dashboard.styled";
import * as StyledHome from "../../styles/Home.styled";
import { IParsedData } from "../../types/parser.types";
import { getCalculateValue } from "../../../utils/switchParser";
import TableHeader from "../Table/TableHeader";
import TableRow from "../Table/TableRow";

interface IConvertedMenuProps {
  parsedData: IParsedData;
}

const ConvertedMenu: FC<IConvertedMenuProps> = ({ parsedData }) => {
  const calculationParams = arrOptions.map((item) => item.split(" ")[0]);

  return (
    <StyledThisComp.WrapperTable>
      <StyledHome.Title>Converted data</StyledHome.Title>
      <TableHeader itemsMenu={["Register", "Values"]} />
      {arrOptions.map((option, idx) => (
        <TableRow
          key={idx}
          asset={[
            option,
            getCalculateValue(
              calculationParams[idx],
              parsedData.data
            ).toString(),
          ]}
        />
      ))}
    </StyledThisComp.WrapperTable>
  );
};

export default ConvertedMenu;
