import styled from 'styled-components';

const StyledCard = styled.section`
  -moz-transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -moz-transform: rotateX(0deg);
  -webkit-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -moz-transition: opacity 1s ease, -moz-transform 1s ease;
  -webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
  -ms-transition: opacity 1s ease, -ms-transform 1s ease;
  transition: opacity 1s ease, transform 1s ease;
  padding: 1.5em 2em 2em 2em ;
  background: #01AEAC;
  border-radius: 4px;
  cursor: default;
  max-width: 100%;
  position: relative;
  width: 27em;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  display: flex;
  -moz-justify-content: flex-start;
  -webkit-justify-content: flex-start;
  -ms-justify-content: flex-start;
  justify-content: flex-start;
  -moz-flex-direction: row;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;

  align-items: center;

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`

export default StyledCard;
