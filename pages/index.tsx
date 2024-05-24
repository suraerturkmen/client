import React, { useEffect, useState } from "react";
import * as S from "@/index.styles";
import { Typography } from "@mui/material";

function Index() {
  const [data, setData] = useState({
    isWater: null,
    humidity: null,
    temperature: null
  });

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/api/mqtt_messages")
        .then((res) => res.json())
        .then((responseData) => {
          const parsedMessages = responseData.messages.map((message: string) => JSON.parse(message));
          setData(parsedMessages[0]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();

    const intervalId = setInterval(fetchData, 2000);

    return () => clearInterval(intervalId);
  }, []);


  const handleGiveWater = () => {
    fetch("http://localhost:8080/api/giveWater", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: "Water the plant" })
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log("Response from server:", responseData);
      })
      .catch((error) => {
        console.error("Error giving water:", error);
      });
  };


  return (
    <S.StyledContainer>
      <S.StyledTitle>SMART PLANT CARE ASSISTANT</S.StyledTitle>
      <S.StyledCardContainer>
        <S.StyledCard>
          <S.StyledPercentageTemperature>
            {data.temperature !== null ? data.temperature + "°C" : "Loading..."}
          </S.StyledPercentageTemperature>
          <S.StyledText>Temperature</S.StyledText>
        </S.StyledCard>
        <S.StyledCard>
          <S.StyledPercentageHumiditiy>
            {data.humidity !== null ? data.humidity + "%" : "Loading..."}
          </S.StyledPercentageHumiditiy>
          <S.StyledText>Humidity</S.StyledText>
        </S.StyledCard>
        <S.StyledCard>
          <S.StyledPercentageLigthness>
            {data.isWater !== null ? (data.isWater ? "Water Detected" : "No Water Detected") : "Loading..."}
          </S.StyledPercentageLigthness>
          <S.StyledText>Water</S.StyledText>
        </S.StyledCard>
      </S.StyledCardContainer>
      <S.StyledButton onClick={handleGiveWater}>
        <Typography color="Highlight" variant="h6">
          Give water to plant
        </Typography>
      </S.StyledButton>
    </S.StyledContainer>
  );
}

export default Index;
