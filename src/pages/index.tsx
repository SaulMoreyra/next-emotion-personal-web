import { ContentContainer, GlobalContainer } from "components/Containers";
import Header from "components/Header";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Views from "views";
import i18nConfig from "../../next-i18next.config";

const Home: NextPage = () => {
  return (
    <GlobalContainer>
      <Head>
        <title>Saul Moreyra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ContentContainer>
        <Views />
      </ContentContainer>
    </GlobalContainer>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(
      locale ?? "es",
      ["common", "presentation", "about"],
      i18nConfig
    )),
  },
});

export default Home;
