import About from "@/components/About";
import Banner from "@/components/Banner";
import Command from "@/components/Comand";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Numbers from "@/components/Numbers";
import OutDoor from "@/components/OutDoor";
import Price from "@/components/Price";
import Pricing from "@/components/Pricing";
import Questions from "@/components/Questions";
import Scholarships from "@/components/Scholarships";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Colba Ta'lim Markazi - Kimyo va Biologiya O'quv Markazi</title>
        <meta
          name="description"
          content="Colba ta'lim markazi - 2010 yilda tashkil topgan va kimyo hamda biologiyaga ixtisoslashgan O'zbekistondagi eng katta o'quv markazi."
        />

        <meta
          name="keywords"
          content="Colba, ta'lim markazi, kimyo, biologiya, matematika, tarix, ona tili, Toshkent"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta
          property="og:title"
          content="Colba Ta'lim Markazi - O'quv Markazi"
        />
        <meta
          property="og:description"
          content="Kimyo va biologiya fanlariga ixtisoslashgan eng yaxshi ta'lim markazi. Toshkentdagi filiallarimizga tashrif buyuring."
        />
        <meta property="og:image" content="/images/banner.jpg" />
        <meta property="og:url" content="https://colba.uz" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Colba Ta'lim Markazi",
            description:
              "Colba ta'lim markazi - 2010 yilda tashkil topgan va kimyo hamda biologiyaga ixtisoslashgan O'zbekistondagi eng katta o'quv markazi.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Toshkent, Yunusobod tumani",
              addressLocality: "Toshkent",
              addressCountry: "UZ",
            },
            telephone: "+998901234567",
            url: "https://colba.uz",
          })}
        </script>
      </Head>
      <Banner />
      <About />
      <WhyUs />
      <OutDoor />
      <Pricing />
      <Questions top />
      <Price />
      <Scholarships />
      <Questions />
      <Numbers />
      <Command />
      <FAQ />
      <Questions />
      <Footer />
    </>
  );
}
