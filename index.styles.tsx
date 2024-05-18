import { styled } from "@mui/material/styles";
import * as colors from "@/constant/colors";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export const StyledContainer = styled("div")({
  display: "flex",
  width: "100%",
  height: "1238px",
  background: colors.linear_background,
  flexDirection: "column",
  alignItems: "center",
  gap: "56px",
});

export const StyledTitle = styled("h1")({
  display: "flex",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "140%",
  color: colors.linear_dark_blue,
});

export const StyledCardContainer = styled("div")({
  display: "flex",
  gap: "56px",
});

export const StyledCard = styled("div")({
  width: "262px",
  height: "230px",
  background: colors.linear_white,
  boxShadow: colors.drop_shadow_black,
  borderRadius: "26px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
});

export const StyledGaugeCard = styled("div")({
  width: "262px",
  height: "230px",
  background: colors.linear_white,
  boxShadow: colors.drop_shadow_black,
  borderRadius: "26px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StyledPercentageLigthness = styled("div")({
  fontFamily: "Roboto Slab",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "64px",
  lineHeight: "140%",
  color: colors.linear_light_grey,
  textAlign: "center",
});

export const StyledPercentageHumiditiy = styled("div")({
  fontFamily: "Roboto Slab",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "64px",
  lineHeight: "140%",
  color: colors.linear_light_green,
  textAlign: "center",
});

export const StyledPercentageTemperature = styled("div")({
  fontFamily: "Roboto Slab",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "64px",
  lineHeight: "140%",
  color: colors.linear_orange,
  textAlign: "center",
});

export const StyledText = styled("div")({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "140%",
  color: colors.linear_grey,
  textAlign: "center",
});
