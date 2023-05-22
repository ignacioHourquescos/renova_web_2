// import Product from "./Sections/Product/Product";
import { Styled } from "./styles";

const { Client } = require("@notionhq/client");

import { useEffect, useState } from "react";
import { get_prices } from "../api/renovapp/prices";
import { get_products_filters } from "../api/sheets/product_filters";
import { get_products_non_filters } from "../api/sheets/products_non_filters";
import ProductCard from "../../components/ofertas/ProductCard/ProductCard";
import Title from "../../components/Home/Title/Title";

export default function Home({ items }) {
  const [products, setProducts] = useState();
  // const [brands, setBrands] = useState(null);
  const [filters, setFilters] = useState();
  const brands = ["FRAM", "MOTUL", "ORIGINALES"];
  let notionArray = [];
  items.forEach((item) => {
    notionArray.push({
      internalNotionCode: item.id,
      id: item.properties.codigo.title[0].plain_text,
      title: item.properties.titulo.rich_text[0].plain_text,
      brand: item.properties.marca.rich_text[0].plain_text,
      active: item.properties.activo.checkbox,
      discount: item.properties.descuento.number,
      imageUrl: item.properties.imagen.files[0]?.file.url,
    });
  });

  console.log("aca esta el array", notionArray);

  useEffect(() => {
    const fetch_all = async () => {
      const productPriceArray = await Promise.all([
        get_products_filters(),
        get_products_non_filters(),
        get_prices(),
      ]);

      const consolidatedProductPrice = notionArray.map((element) => ({
        ...element,
        price:
          productPriceArray[2].filter(
            (element2) => element2.id == element.id
          )[0]?.pr *
          1.21 *
          (1 - element.discount),
      }));
      setProducts(consolidatedProductPrice);
      // setProducts(consolidatedProductPrice_non_filter);
    };

    fetch_all();
  }, []);

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
}

// prettier-ignore
export async function getStaticProps() {
	const notion = new Client({auth: "secret_4yG0RqGh5tXyLuKm3gRMhyvRf1ygu6sNRINVQliEofc"});
	const response = await notion.databases.query({
		database_id: "2bca360b3aae4517abae717845adbc9a",
		sorts: [{timestamp: "created_time",direction: "ascending",}],
	});

	return {
		props: {items: response.results},
		revalidate: 1,
	};
}