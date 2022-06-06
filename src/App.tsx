import React, { ChangeEvent, useEffect, useState } from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { assetTestCase } from "./common/assets/consts/variables";
import Header from "./common/components/Header";
import Dashboard from "./common/pages/Dashboard";
import Welcome from "./common/pages/Welcome";
import "./common/styles/globals.css";
import * as StyledThisComp from "./common/styles/Home.styled";
import {
  CaseFileType,
  CaseVariants,
  IParsedData,
} from "./common/types/parser.types";
import { getParsedFileData } from "./utils/parseFile";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const [asset, setAsset] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<IParsedData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");
  const [currentCase, setCurrentCase] = useState<CaseFileType>("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const showFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const reader = new FileReader();
      const targetValue = (e.target as HTMLInputElement)?.files;
      const textFile = (targetValue as FileList)[0];
      const fileType = textFile.name.split(".").reverse()[0];

      if (fileType === "txt") {
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const target = e.target as FileReader;
          const text = target && target.result;
          !!text && setAsset(text as string);
          setCurrentCase(CaseVariants.customCase);
        };
        setError("");
        setCurrentStep(0);
        reader.readAsText(textFile);
      } else {
        setError("Error: Invalid file format");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    asset && setParsedData(getParsedFileData(asset));
  }, [asset]);

  const handleChangeStep = (newStep: number) => {
    setCurrentStep(newStep);
  };

  const handleLogout = () => {
    setAsset(null);
    setParsedData(null);
    setIsOpenDrawer(false);
  };

  const uploadTestCaseHandler = () => {
    setCurrentStep(0);
    setAsset(assetTestCase);
    setCurrentCase(CaseVariants.testCase);
  };

  const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer);

  return (
    <StyledThisComp.Container customize={!parsedData}>
      {!!parsedData && (
        <>
          <Header currentCase={currentCase} onToggle={toggleDrawer} />
        </>
      )}

      <StyledThisComp.Wrapper>
        {parsedData && !error ? (
          <Dashboard
            assetData={asset}
            parsedData={parsedData}
            currentStep={currentStep}
            isOpen={isOpenDrawer}
            onToggle={toggleDrawer}
            onLogout={handleLogout}
            onChangeStep={handleChangeStep}
          />
        ) : (
          <Welcome
            onShowTestCase={uploadTestCaseHandler}
            onShowFile={showFile}
            errorMessage={error}
          />
        )}
      </StyledThisComp.Wrapper>
    </StyledThisComp.Container>
  );
};

export default App;
