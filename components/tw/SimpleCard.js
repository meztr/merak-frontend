import tw, { styled, css } from "twin.macro";

const CardStyle = tw.div`max-w-xs rounded overflow-hidden shadow-lg my-2 px-4 py-2 m-2`;
const ImgStyle = styled.img(({src, alt}) => [
  tw`w-full`,
  src={src},
  alt={alt}
])
function SimpleCard({ data, children}) {
  return (
    <>
      <CardStyle>
        <ImgStyle 
          src={data.src}
          alt={data.alt} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.title}</div>
        </div>
      </CardStyle>
    </>
  );
}

export default SimpleCard