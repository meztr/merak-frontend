import { Box, Flex } from 'reflexbox';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';
import getConfig from 'next/config';
import { parseCookies } from 'nookies';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdmisiFeature from 'components/Admisi/feature';
// import Head from 'next/head'

/**
 * * Get admisis artikel props
 * ? Should this method be exposed by common user staff/guru
 * TODO: refactor this method for user with ediotr auths only
 * @param {admisis} admisis The artikel props
 */

function Admisi({ admisis }) {
    // console.log(admisis)
    return (
        <>
            {/* <Head>
        <script type="text/javascript" src="/scripts/tawkto.js" />
      </Head> */}

            <AdmisiFeature />
        </>
    );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(ctx) {
    const jwt = parseCookies(ctx).jwt;

    const res = await fetch(`${publicRuntimeConfig.API_URL}/admisis`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });

    const admisis = await res.json();

    return {
        props: {
            admisis: admisis
        }
    };

    // const loginInfo = {
    //     identifier: 'qq@qq.qq',
    //     password: 'qq1234'
    // }

    // const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(loginInfo)
    // })

    // const loginResponse = await login.json()

    // const res = await fetch(`${publicRuntimeConfig.API_URL}/admisis`, {
    // 	headers: {
    // 		Authorization: `Bearer ${loginResponse.jwt}`
    // 	}
    // })
    // const admisis = await res.json()
}

const AdmisiItemStyled = styled.div`
    a {
        padding: 10px;
        margin-bottom: 20px;
        margin-left: 10px;
        border: 1px solid #cccccc;
        border-radius: 4px;
        text-decoration: none;
        color: gray;
        &:hover {
            text-decoration: underline;
        }
    }
`;
const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 12px;
    margin-left: auto;
    &:last-child {
        margin-bottom: 0;
    }
`;
const Avatar = styled.img`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 96px;
    width: 96px;
    height: 96px;
    margin: 0;
`;
const Description = styled.div`
    flex: 1;
    margin-left: 18px;
    padding: 12px;
`;
const Username = styled.h2`
    margin: 0 0 12px 0;
    padding: 0;
`;
const Excerpt = styled.p`
    margin: 0;
`;
// Using css prop provides a concise and flexible API to style the components. //
const underline = css`
    text-decoration: underline;
`;
const User = (props) => (
    <UserWrapper>
        <Avatar src={props.avatar} alt="" />
        <Description>
            <Username>{props.username}</Username>
            <Excerpt>{props.excerpt}</Excerpt>
        </Description>
    </UserWrapper>
);

export default Admisi;
