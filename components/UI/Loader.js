import React from "react";
import { Inner, Text } from "./styles";
import { Spin } from "antd";

const Loader = (props) => {
  return (
    <Inner>
      <Spin size="large" />
      <Text> Buscando ofertas...</Text>
    </Inner>
  );
};

export default Loader;
