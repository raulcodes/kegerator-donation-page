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
  padding: 4.5em 3em 3em 3em ;
  background: #01AEAC;
  border-radius: 4px;
  cursor: default;
  max-width: 100%;
  opacity: 0.95;
  position: relative;
  text-align: center;
  width: 27em;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  @media screen and (max-width: 480px) {
    padding: 4em 2em 2.5em 2em ;
    width: 80%;
  }
`

export default StyledCard;
