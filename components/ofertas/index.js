import React from "react";
import { Styled } from "./styles";
import Title from "./title/Title";
import ProductCard from "./product-card/ProductCard";

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
