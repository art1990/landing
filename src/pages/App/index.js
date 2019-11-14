//react
import React from "react";
//assets
import styled from "styled-components/macro";

const Test = styled.div`
  background-color: rebeccapurple;
  width: 100px;
  height: 100px;
`;

function Index() {
  return (
    <div>
      <Test />
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/">dddddddddddddddddd</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Index;
