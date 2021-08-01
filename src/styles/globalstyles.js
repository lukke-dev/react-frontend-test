import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  background-color: #373F51;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

button {
  margin-top: 15px;
  cursor: pointer;
  background: #1B1B1E;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  transition: all 300ms;
}
button:hover {
  background: #373F51;
}
`;

export default GlobalStyles;
