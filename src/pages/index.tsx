import About from "@/components/about";
import Hero from "@/components/hero";
import OurChef from "@/components/ourChef";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman Kitchen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <About />
      <OurChef />
    </>
  );
}
