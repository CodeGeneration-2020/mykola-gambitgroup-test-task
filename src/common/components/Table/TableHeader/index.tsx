import React, { FC } from "react";
import * as StyledThisComp from "../../../styles/MenuHeader.styled";

interface ITableHeaderProps {
  itemsMenu: string[];
}

const TableHeader: FC<ITableHeaderProps> = ({ itemsMenu }) => {
  return (
    <StyledThisComp.Wrapper>
      {itemsMenu.map((item, idx) => (
        <StyledThisComp.WrapperItem key={idx}>
          <StyledThisComp.Item darken={true}>{item}</StyledThisComp.Item>
        </StyledThisComp.WrapperItem>
      ))}
    </StyledThisComp.Wrapper>
  );
};

export default TableHeader;
