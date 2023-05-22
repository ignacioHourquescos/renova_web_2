import React from "react";
import { Styled } from "./styles";
import ProductCard from "./components/product-card/ProductCard";
import Title from "./components/title/Title";

export const Ofertas = ({ brands, products }) => {
  return (
    <Styled.Container>
      {brands.map((brandElement, idx) => (
        <>
          <Title key={idx}>{brandElement}</Title>
          {products
            ?.filter((element) => element.brand == brandElement)
            .map((element, idx) => (
              <ProductCard key={idx} products={element} />
            ))}
        </>
      ))}
    </Styled.Container>
  );
};
