/* eslint-disable react/prop-types */
import tw, { styled } from 'twin.macro';

const CardStyle = tw.div`max-w-xs rounded overflow-hidden shadow-lg my-2 px-4 py-2 m-2`;
const ImgStyle = styled.img(({ src, alt }) => [tw`w-full`, (src = { src }), (alt = { alt })]);
function SimpleCard({ data, children }) {
    return (
        <>
            <CardStyle>
                <ImgStyle src={data.src} alt={data.alt} />
                <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">{data.title}</div>
                </div>
                {children}
            </CardStyle>
        </>
    );
}

export default SimpleCard;
