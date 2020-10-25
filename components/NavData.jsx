/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import tw from 'twin.macro';
import Link from 'next/link';

function NavData({ navdata }) {
    return (
        <>
            <div tw="lex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                <li key={0} css={tw`list-none`}>
                    <Link href="/">
                        <a
                            css={[
                                tw`my-1 text-sm text-black font-bold leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0 active:text-yellow-400`
                            ]}
                            onClick={() => {
                                navbarOpen && setNavbarOpen(!navbarOpen);
                            }}
                            href="/">
                            Home
                        </a>
                    </Link>
                </li>
            </div>
        </>
    );
}
