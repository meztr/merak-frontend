// import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
// import { useRouter } from "next/router";
// import Card from "components/kumparanCard";

function Berita({ artikels, page, numberOfArtikels }) {
  return (
    <Box variant="container" pt={20} pb={80}>
      <Box mb={40} pl={20}>
        <h5>Beritas goes here</h5>
      </Box>
    </Box>
  );
}

// export async function getServerSideProps({ query: { page = 1 } }) {
//   const { API_URL } = process.env;
//   const numItemsInPage = 5;
//   const start = +page === 1 ? 0 : (+page - 1) * numItemsInPage;
//   const numberOfArtikelsResponse = await fetch(`${API_URL}/artikels/count`);
//   const numberOfArtikels = await numberOfArtikelsResponse.json();

//   const res = await fetch(
//     `${API_URL}/artikels?_limit=${numItemsInPage}&_start=${start}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       artikels: data,
//       page: +page,
//       numberOfArtikels,
//     },
//   };
// }

export default Berita;
