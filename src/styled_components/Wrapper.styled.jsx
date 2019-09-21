import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FAF5E3;
  background-color: #FAF5E3;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-perspective: 1000px;
  -webkit-perspective: 1000px;
  -ms-perspective: 1000px;
  perspective: 1000px;
  position: relative;
  min-height: 100%;
  padding: 1.5em;
  z-index: 2;

  & > * {
    z-index: 1;
  }

  :before {
    content: '';
    display: block;
  }

  @media screen and (max-width: 360px) {

    #wrapper {
      padding: 0.75em;
    }

  }
`

export default Wrapper;
