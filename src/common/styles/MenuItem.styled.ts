import styled from "styled-components";
import { themes } from "./theme";

export const Wrapper = styled.div`
  border-bottom: 1px solid ${themes.colours.blue100};
  border-left: 1px solid ${themes.colours.blue100};
  border-right: 1px solid ${themes.colours.blue100};
  background: ${themes.colours.orange300};
  display: flex;

  &:last-child {
    border-radius: 0 0 4px 4px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperItem = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-right: 1px solid ${themes.colours.blue100};

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    border: none;

    &:first-child {
      border-bottom: 1px solid ${themes.colours.blue100};
    }
  }
`;
