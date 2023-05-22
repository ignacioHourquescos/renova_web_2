import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Ofertas() {
  const router = useRouter();

  useEffect(() => {
    router.push("/ofertas");
  });

  return (
    <>
      {/* <Link href="/home"> OFERTAS</Link>
      <Link href="/home"> LISTAS</Link> */}
    </>
  );
}
