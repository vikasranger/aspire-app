import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import {useTheme} from "@mui/material/styles";
import {Property} from "csstype";
import * as React from "react";

export default function CardCarousel(props: {
  children: React.ReactNode,
  activeStep: number,
  setActiveStep: (step: number) => void,
  totalSteps: number,
  width?: Property.Width,
  height?: Property.Height,
})
{
  const {
    totalSteps,
    activeStep,
    setActiveStep,
    width,
    height,
    children
  } = props;
  const theme = useTheme();
  const [step, setStep] = React.useState(activeStep);

  const handleNext = () =>
  {
    const newStep = step + 1;
    setStep(newStep);
    setActiveStep(newStep);
  };

  const handleBack = () =>
  {
    const newStep = step - 1;
    setStep(newStep);
    setActiveStep(newStep);
  };

  return (
    <Box width={width} height={height}>
      {children}
      <MobileStepper
        variant="text"
        steps={totalSteps}
        position="static"
        activeStep={step}
        sx={{bgcolor: "transparent"}}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={step === totalSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={step === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}
