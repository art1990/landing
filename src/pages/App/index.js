//react
import React from "react";
//route
import { Route, Switch, useLocation } from "react-router-dom";
//pages
import Home from "pages/Home";
import Services from "pages/Services";
import Team from "pages/Team";
//components
import Header from "pages/App/components/Header";
import Footer from "pages/App/components/Footer";
//assets
import styled from "styled-components/macro";
import { textMisc, colors } from "assets/styles/utils/vars";
import { footerData } from "data";

const S = {};

S.Container = styled.div({
  maxWidth: "1440px",
  margin: "0 auto",
});

const App = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <S.Container>
      <Header
        color={!isHome ? colors.textHeaders : undefined}
        logoColor={!isHome ? colors.violet : undefined}
        logo="Lopper"
        tel="(01) 666 - 693 - 456"
        isHome={isHome}
        linkStyles={textMisc.navHeader}
        linkNamesArray={["Home", "Services", "Work", "About"]}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/team" component={Team} />
      </Switch>
      <Footer footerData={footerData} />
    </S.Container>
  );
};

export default App;
