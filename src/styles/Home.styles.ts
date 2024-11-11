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

export const CountryList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1400px;
  justify-content: center;
`;

export const CountryCard = styled.li`
  background-size: cover; 
  background-position: center; 
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 25px;
  width: 220px;
  height: 150px; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  text-align: center;
  color: white; 
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CountryName = styled.h1`
  font-size: 20px;
  margin: 0;
  font-weight: 600;
  color: white; 
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); 
`;

export const CountryCode = styled.h2`
  font-size: 16px;
  margin: 8px 0 0;
  font-weight: 400;
  color: white; 
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); 
`;
