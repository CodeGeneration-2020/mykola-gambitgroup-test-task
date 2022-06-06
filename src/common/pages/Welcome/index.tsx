import React, { ChangeEvent, useRef } from "react";
import WelcomeButton from "../../components/WelcomeButton";
import * as StyledThisComp from "../../styles/Welcome.styled";

interface IWelcomeProps {
  errorMessage: string;
  onShowTestCase: () => void;
  onShowFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Welcome = ({
  errorMessage,
  onShowTestCase,
  onShowFile,
}: IWelcomeProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const uploadButtonHandler = () =>
    inputRef.current && inputRef.current.click();

  return (
    <StyledThisComp.Container>
      <StyledThisComp.ContentWrapper>
        <StyledThisComp.Title>Gambit challenge task</StyledThisComp.Title>

        <StyledThisComp.RowActions>
          <WelcomeButton actionHandler={uploadButtonHandler}>
            Connect{" "}
            <StyledThisComp.ButtonAdditional>
              (txt)
            </StyledThisComp.ButtonAdditional>
            <input
              type="file"
              ref={inputRef}
              onChange={onShowFile}
              style={{ display: "none" }}
            />
          </WelcomeButton>
          <WelcomeButton actionHandler={onShowTestCase}>
            test case
          </WelcomeButton>
        </StyledThisComp.RowActions>

        {!!errorMessage && (
          <StyledThisComp.ErrorMessage>
            {errorMessage}
          </StyledThisComp.ErrorMessage>
        )}
      </StyledThisComp.ContentWrapper>
    </StyledThisComp.Container>
  );
};

export default Welcome;
