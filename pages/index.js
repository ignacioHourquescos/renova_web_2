import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import PromotionalCard from "../components/PromotionalCard/PromotionalCard";

export default function Home() {
	return (
		<>
			indice de cosas
			<li>
				<Link href="/home"> OFERTAS</Link>
			</li>
		</>
	);
}
