import React, { useEffect, useState } from "react";
import * as S from "@/index.styles";
import {
  Gauge,
  GaugeReferenceArc,
  GaugeValueArc,
  gaugeClasses,
} from "@mui/x-charts/Gauge";
import * as colors from "@/constant/colors";

function Index() {
  const [data, setData] = useState([
    { temperature: 0, humidity: 0, lightness: 0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.messages);
      });
  }, []);

  return (
    <S.StyledContainer>
      <S.StyledTitle>SMART PLANT CARE ASSISTANT</S.StyledTitle>
      <S.StyledCardContainer>
        <S.StyledCard>
          <S.StyledPercentageTemperature>
            {data[0].temperature + "°C"}
          </S.StyledPercentageTemperature>
          <S.StyledText>Sıcaklık</S.StyledText>
        </S.StyledCard>
        <S.StyledCard>
          <S.StyledPercentageHumiditiy>
            {data[0].humidity}
          </S.StyledPercentageHumiditiy>
          <S.StyledText>Humidity</S.StyledText>
        </S.StyledCard>
        <S.StyledCard>
          <S.StyledPercentageLigthness>
            {data[0].lightness}
          </S.StyledPercentageLigthness>
          <S.StyledText>Lightness</S.StyledText>
        </S.StyledCard>
      </S.StyledCardContainer>
    </S.StyledContainer>
  );
}

export default Index;
