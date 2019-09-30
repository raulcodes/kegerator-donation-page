import styled from 'styled-components';

const BlankCard = styled.span`
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
  margin-top: 40px;
  border-color: #01AEAC;
  border-style: dashed;
  border-width: 5px;
  border-radius: 4px;
  cursor: default;
  max-width: 100%;
  opacity: 0.95;
  position: relative;
  width: 26em;
  height: 7em;

  @media screen and (max-width: 480px) {
    width: 80%;
    height: 7em;
  }

  h3 {
    text-align: center;
    color: #01AEAC;
    line-height: 6em;
    margin: auto;
  }
`

export default BlankCard;