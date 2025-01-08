// import Product from "./Sections/Product/Product";

import { Client } from "@notionhq/client";
import { useState } from "react";
import { get_prices } from "../api/renovapp/prices";
import { Ofertas as OfertasDetail } from "../../components/ofertas/index";
import Loader from "../../components/UI/Loader";

export default function Home({ consolidatedProducts }) {
	const categories = [
		"FRAM",
		"MOTUL",
		"ORIGINALES",
		"SINTETICO",
		"MINERAL",
		"SEMI-SINTETICO",
		"LOCX",
		"TOTAL",
		"PUMA",
		"VALVOLINE",
		"PETRONAS",
		"SHELL-OMNICRAFT",
		"SHELL",
		"LOCX",
		"VARIOS",
		"OFERTAS FILTROS",
		"ACEITES",
		"KITS",
	];

	return (
		<>
			<OfertasDetail categories={categories} products={consolidatedProducts} />
		</>
	);
}

// prettier-ignore
export async function getStaticProps() {
	const notion = new Client({auth: "secret_4yG0RqGh5tXyLuKm3gRMhyvRf1ygu6sNRINVQliEofc"});
	const [notionResponse, prices] = await Promise.all([
		notion.databases.query({
			database_id: "2bca360b3aae4517abae717845adbc9a",
			sorts: [
				{
					property: "codigo",
					direction: "ascending"
				}
			],
			filter: {
				property: "activo",
				checkbox: {
					equals: true
				}
			}
		}),
		get_prices()
	]);

	const notionArray = notionResponse.results.map(item => ({
		internalNotionCode: item?.id || '',
		id: item.properties.codigo.title[0]?.plain_text || '',
		title: item.properties.titulo.rich_text[0]?.plain_text || '',
		brand: item.properties.marca.rich_text[0]?.plain_text || '',
		active: item.properties.activo?.checkbox || false,
		discount: item.properties.descuento?.number || 0,
		imageUrl: item.properties.imagen.files[0]?.file?.url || '',
		category: item.properties.categoria.select?.name || '',
		specialPrice: item.properties.precio?.number || 0,
		detail: item.properties.detalle?.rich_text[0]?.plain_text || '',
	}));

	const consolidatedProducts = notionArray.map((element) => ({
		...element,
		price: (prices.find(element2 => element2.id == element.id)?.pr || 0) * 1.21 * (1 - element.discount),
	}));

	return {
		props: {
			consolidatedProducts: consolidatedProducts.map(product => ({
				...product,
				price: product.price || 0
			}))
		},
		revalidate: 60,
	};
}
