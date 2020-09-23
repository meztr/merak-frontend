import fetch from 'isomorphic-unfetch'
import { Flex, Box } from 'reflexbox'
import { useRouter } from 'next/router'

function ArtikelPage({ artikels, page, numberOfArtikels }) {
    const router = useRouter()
    console.log(router.query)

    const lastPage = Math.ceil(numberOfArtikels / 5)
    return (
        <Box variant="container" pt={40}>
            <ul>
                {artikels.map(artikel => (
                    <li key={artikel.id}>
                        <h3>{artikel.title}</h3>
                    </li>
                ))}
            </ul>

            <Flex
                mt={40}
                pl={20}
                justifyContent="space-between"
                maxWidth={300}
            >
                <button onClick={ ()=> router.push(`/artikel?page=${page - 1}`)}
                    disabled={page <= 1}>Prev</button>
                <button onClick={ ()=> router.push(`/artikel?page=${page + 1}`)}
                    disabled={page >= lastPage}>Next</button>
            </Flex>
        </Box>
    )
}

export async function getServerSideProps({ query: {page= 1}}) {
    const { API_URL } = process.env
    const numItemsInPage = 5
    const start = +page === 1 ? 0 : (+page - 1) * numItemsInPage
    const numberOfArtikelsResponse = await fetch(`${API_URL}/artikels/count`)
    const numberOfArtikels = await numberOfArtikelsResponse.json()

    const res = await fetch(`${API_URL}/artikels?_limit=${numItemsInPage}&_start=${start}`)
    const data = await res.json()

    return {
        props: {
            artikels: data,
            page: +page,
            numberOfArtikels
        }
    }
}

export default ArtikelPage