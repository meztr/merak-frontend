/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box } from 'reflexbox';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import { useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next/router';

const { publicRuntimeConfig } = getConfig();

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // TODO:
    // #1. error handling handleLogin
    async function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        };

        const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        });

        const loginResponse = await login.json();

        setCookie(null, 'jwt', loginResponse.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        });

        Router.push('/admisi');
        console.log(loginResponse);
    }

    return (
        <>
            <LoginStyled>
                <Box variant="container">
                    <Box as="h2" pt={40}>
                        You need to login to access this page
                    </Box>

                    <form>
                        <input
                            type="email"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />{' '}
                        <br />
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />{' '}
                        <br />
                        <button type="button" onClick={() => handleLogin()}>
                            Login
                        </button>
                    </form>
                </Box>
            </LoginStyled>

            {/* <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
                        Brand
                    </h2>

                    <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                        Welcome Back
                    </h3>

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                        Login or create account
                    </p>

                    <form>
                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                type="email"
                                placeholder="Email Address"
                                aria-label="Email Address"
                            />
                        </div>

                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a
                                href="#"
                                className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">
                                Forget Password?
                            </a>

                            <button
                                className="px-4 py-2 text-white bg-gray-700 rounded leading-5 transition-colors duration-200 transform hover:bg-gray-600 focus:outline-none"
                                type="button">
                                Login
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">
                        Don'&apost; have an account?{' '}
                    </span>

                    <a
                        href="#"
                        className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">
                        Register
                    </a>
                </div>
            </div> */}
        </>
    );
}

const LoginStyled = styled.div`
    input {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
`;

export default Login;
