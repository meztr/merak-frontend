import { Box } from 'reflexbox';
import styled from '@emotion/styled';
import getConfig from 'next/config';
import { useState } from 'react';
import { parseCookies } from 'nookies';

const { publicRuntimeConfig } = getConfig();

function AddArtikel() {
    const [artikelTitle, setArtikelTitle] = useState('');
    const [artikelDeskripsi, setArtikelDeskripsi] = useState('');
    const [artikelSlug, setArtikelSlug] = useState('');

    async function addArtikel() {
        const jwt = parseCookies().jwt;

        const artikelInfo = {
            title: artikelTitle,
            deskripsi: artikelDeskripsi,
            slug: artikelSlug
        };

        const add = await fetch(`${publicRuntimeConfig.API_URL}/artikels`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artikelInfo)
        });

        const addResponse = await add.json();

        console.log(addResponse);
    }

    return (
        <AddArtikelStyled>
            <Box variant="container">
                <Box as="h2" my={40}>
                    Add Artikel
                </Box>

                <form>
                    <input
                        type="text"
                        onChange={(e) => setArtikelTitle(e.target.value)}
                        value={artikelTitle}
                        placeholder="Artikel title"
                    />
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setArtikelDeskripsi(e.target.value)}
                        value={artikelDeskripsi}
                        placeholder="Artikel Deskripsi"
                    />
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setArtikelSlug(e.target.value)}
                        value={artikelSlug}
                        placeholder="Artikel slug"
                    />
                    <br />
                    <button type="button" onClick={() => addArtikel()}>
                        Add Artikel
                    </button>
                </form>
            </Box>
        </AddArtikelStyled>
    );
}

const AddArtikelStyled = styled.div`
    input {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
`;

export default AddArtikel;
