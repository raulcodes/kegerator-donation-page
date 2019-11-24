import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: "modesto-expanded", serif;
  color: rgb(49, 91, 138);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  perspective: 1000px;
  position: relative;
  min-height: 100%;
  padding: 1.5em;
  z-index: 2;

  .card {
    font-family: "coranto-2", serif;

    .title {
      font-size: 1.5rem;
    }

    .card-footer {
      margin-top: 15px;
      padding-top: 15px; 
    }
  }

  h1 {
    font-size: 5rem;
  }

  h3 {
    margin-bottom: 30px;
    font-family: "coranto-2", serif;
    font-size: 2rem;
  }

  hr {
    width: 85%;
    height: 2px;
    background-color: black;
  }

  & > * {
    z-index: 1;
  }

  :before {
    content: '';
    display: block;
  }

  @media screen and (max-width: 1060px) {
    h1 {
      font-size: 3rem;
    }

    #wrapper {
      padding: 0.75em;
    }

  }

  @media screen and (max-width: 660px) {
    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`

export default Wrapper;
