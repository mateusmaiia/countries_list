import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Ajuste conforme necessário */

  .spinner {
    border: 8px solid #f3f3f3; /* Cor de fundo do spinner */
    border-top: 8px solid #3498db; /* Cor da borda giratória */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
