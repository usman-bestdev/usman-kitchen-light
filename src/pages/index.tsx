import About from "@/components/about";
import AppBar from "@/components/appBar";
import BestFood from "@/components/bestFood";
import Category from "@/components/category";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
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
      <AppBar />
      <Hero />
      <Category />
      <About />
      <BestFood />
      <OurChef />
      <ContactUs />
      <Gallery />
      <Footer />
    </>
  );
}
