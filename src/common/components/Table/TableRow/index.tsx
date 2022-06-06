import React, { FC } from "react";
import * as StylesMenuHeader from "../../../styles/MenuHeader.styled";
import * as StyledThisComp from "../../../styles/MenuItem.styled";

interface ITableRowProps {
  asset: (string | number)[];
}

const TableRow: FC<ITableRowProps> = ({ asset }) => {
  return (
    <StyledThisComp.Wrapper>
      {asset.map((item, idx) => (
        <StyledThisComp.WrapperItem key={idx}>
          <StylesMenuHeader.Item>{item}</StylesMenuHeader.Item>
        </StyledThisComp.WrapperItem>
      ))}
    </StyledThisComp.Wrapper>
  );
};

export default TableRow;
