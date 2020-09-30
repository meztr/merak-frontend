import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
import Layout from "components/layout/Layout";
import Landing from "components/landing"
import Card from "components/Card";
import Welcome from "components/Welcome";
import HeroTail from "components/Hero/HeroTail";
import LoopInfo from "components/LoopInfo";
// import useSticky from '../hooks/useSticky'
// import { withTranslation } from '../i18n'
// import HeroWithBackground from 'components/Hero/HeroWithBackground'

// const Home = ({ artikels, t }) => {
const Home = ({ artikels }) => {
  // const { isSticky, element } = useSticky()

  return (
    // <Box variant="container" bg={{_:"red", lg:"yellow"}}></Box>
    <>
      {/* <Box variant="hero">
                <HeroWithBackground title="Home goes here"/>
            </Box> */}

      {/* <Box variant="container">
        <LoopInfo infos={artikels}/>
        <Welcome element={null} />
        <HeroTail />
        <Box my={40} as="h2">
          Artikel Terbaru
        </Box>
        <Flex
          justifyContent="space-between"
          flexDirection={{ _: "column", md: "row" }}
          flexWrap="wrap"
        >
          {artikels.map((artikel) => (
            <Box key={artikel.id} width={{ _: "100%", md: "30%" }}>
              <Card artikel={artikel} />
            </Box>
          ))}
        </Flex>
      </Box> */}

      <Layout>
        <Landing />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/artikels`);
  const data = await res.json();

  return {
    props: {
      artikels: data,
    },
  };
}

export default Home;
// export default withTranslation()(Home)
