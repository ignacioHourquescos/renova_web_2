// import Product from "./Sections/Product/Product";

import { Client } from "@notionhq/client";
import { useState, useEffect } from "react";
import { get_prices } from "../api/renovapp/prices";
import { Ofertas as OfertasDetail } from "../../components/ofertas/index";
import Loader from "../../components/UI/Loader";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [consolidatedProducts, setConsolidatedProducts] = useState([]);

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [notionResponse, prices] = await Promise.all([
					fetch("/api/notion/products").then((res) => res.json()),
					get_prices(),
				]);

				const notionArray = notionResponse.results.map((item) => ({
					internalNotionCode: item?.id || "",
					id: item.properties.codigo.title[0]?.plain_text || "",
					title: item.properties.titulo.rich_text[0]?.plain_text || "",
					brand: item.properties.marca.rich_text[0]?.plain_text || "",
					active: item.properties.activo?.checkbox || false,
					discount: item.properties.descuento?.number || 0,
					imageUrl: item.properties.imagen.files[0]?.file?.url || "",
					category: item.properties.categoria.select?.name || "",
					specialPrice: item.properties.precio?.number || 0,
					detail: item.properties.detalle?.rich_text[0]?.plain_text || "",
				}));

				const products = notionArray.map((element) => ({
					...element,
					price:
						(prices.find((element2) => element2.id == element.id)?.pr || 0) *
						1.21 *
						(1 - element.discount),
				}));

				setConsolidatedProducts(products);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();

		// Route change handlers
		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	}, [router]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<OfertasDetail
					categories={categories}
					products={consolidatedProducts}
				/>
			)}
		</>
	);
}
