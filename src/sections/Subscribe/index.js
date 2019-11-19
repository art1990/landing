//react
import React from "react";
//components
import Input from "components/Input";
import IconButton from "components/IconButton";
//assets
import styled from "styled-components/macro";
import { colors, headers } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div({
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "125px 0 140px 0",

  h3: {
    ...headers.h3,

    color: colors.textHeaders,
    marginBottom: "0.3em",
  },

  h6: {
    ...headers.h6,

    color: colors.textMain,
    margin: "0.3em 0",
  },
});

S.FormContainer = styled.form({
  display: "flex",
  width: "100%",
  maxWidth: "560px",
  marginTop: "40px",
});

const Subscribe = () => (
  <S.Container>
    <h3>Subscribe to our newsletter</h3>
    <h6>Cras pulvinar mattis nunc sed blandit.</h6>
    <S.FormContainer>
      <Input placeholder="enter email" />
      <IconButton type="submit">Subscribe</IconButton>
    </S.FormContainer>
  </S.Container>
);

export default Subscribe;
