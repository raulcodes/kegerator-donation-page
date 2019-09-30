import styled from 'styled-components';

const Avatar = styled.span`
  position: relative;
  display: block;
  float: left
  // margin-bottom: 1.5em;

  img {
    display: block;
    margin: 0 auto;
    border-radius: 100%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -3em;
    width: calc(100% + 6em);
    height: 1px;
    z-index: -1;
    background: #c8cccf;
  }

  @media screen and (max-width: 480px) {
    :before {
      left: -2em;
      width: calc(100% + 4em);
    }
  }
`

export default Avatar;