import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #f0f4f8;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const DetailsCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  background-color: #2980b9;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #1abc9c;
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const FlagBackground = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const CountryTitle = styled.h2`
  font-size: 28px;
  color: #2c3e50;
  margin: 0;
  margin-bottom: 20px;
`;

export const ChartContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const ChartTitle = styled.h3`
  font-size: 24px;
  color: #34495e;
  margin-top: 0;
  margin-bottom: 15px;
`;

export const BorderCountriesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const BorderCountryItem = styled.li`
  cursor: pointer;
  background-color: #2980b9;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #1abc9c;
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const SkeletonBox = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  height: 150px; /* Altura padrão, pode ser ajustada */
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SkeletonText = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  width: 60%;
  height: 20px;
  margin-bottom: 20px;
  animation: pulse 1.5s infinite;
`;
