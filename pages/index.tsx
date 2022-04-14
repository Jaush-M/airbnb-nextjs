import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner/banner";
import Container from "../components/container/container";
import Header from "../components/layout/header/header";
import SmallCard from "../components/smallCard/smallCard";
import { GetCardsData, GetLocationData } from "../types";
import styles from "../styles/home.module.scss";
import Section from "../components/section/section";
import MediumCard from "../components/mediumCard/mediumCard";
import LargeCard from "../components/largeCard/largeCard";
import Footer from "../components/layout/footer/footer";

interface HomeProps {
  locationData: GetLocationData[];
  cardsData: GetCardsData[];
}

const Home: NextPage<HomeProps> = ({ locationData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <Container>
        <Section title={"Explore Nearby"}>
          <div className={`${styles["small-cards"]}`}>
            {locationData.map(({ img, location, distance }, index) => (
              <SmallCard
                key={index}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </Section>

        <Section title={"Live Anywhere"}>
          <div className={`${styles["medium-cards"]}`}>
            {cardsData.map(({ img, title }, index) => (
              <MediumCard key={index} img={img} title={title} />
            ))}
          </div>
        </Section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </Container>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const locationData: GetLocationData = await fetch(
    "https://airbnb-lovat.vercel.app/api/locations"
  ).then((res) => res.json());

  const cardsData: GetCardsData = await fetch(
    "https://airbnb-lovat.vercel.app/api/cards"
  ).then((res) => res.json());

  return {
    props: {
      locationData,
      cardsData,
    },
  };
};

export default Home;
