//react
import React from "react";
//route
import { Route, Switch } from "react-router-dom";
//pages
import Home from "pages/Home";
import Services from "pages/Services";
//components
import Header from "pages/App/Header";
//assets
import { textMisc, colors } from "assets/styles/utils/vars";

const App = props => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <Route
        path="/"
        render={({ location: { pathname } }) => {
          const isHome = pathname === "/";

          return (
            <Header
              color={!isHome ? colors.textHeaders : undefined}
              logoColor={!isHome ? colors.violet : undefined}
              logo="Lopper"
              tel="(01) 666 - 693 - 456"
              isHome={isHome}
              linkStyles={textMisc.navHeader}
              linkNamesArray={["Home", "Services", "Work", "About"]}
            />
          );
        }}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        {/*<Route exact path="/team" component={Team} />*/}
      </Switch>
    </div>
  );
};

export default App;
