import styled from '@emotion/styled'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'

function Card ({ artikel }) {
    if((!artikel.topic)) {
        artikel.topic = {}
        artikel.topic.slug = 'uncategorized'
    }

    return (
        <CardStyled>
            <LazyLoad
                once={true}
                placeholder={<img src={'/images/smkhebat.jpg'} alt="smk-hebat" />}
            >
                <div className="poster">
                    <img src={ artikel.image ? artikel.image.url : '/images/smkhebat-darker.jpg' } alt={artikel.image ? artikel.image.name : 'smk-hebat'}/>
                </div>
            </LazyLoad>

            <div className="body">
                <h3>{ artikel.title }</h3>
                <p dangerouslySetInnerHTML={{ __html: artikel.deskripsi }} />

                <Link href="/artikel/[topic]/[slug]" as={`/artikel/${artikel.topic.slug}/${artikel.slug}`}>
                    <a>More about this artikel</a>
                </Link>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    // min-height: 430px;
    // max-height: 430px;

    .poster {
        img {
            
        }
    }

    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }

        a {
            display: inline-block;
            margin: 20px 0;
        }
    }
`
export default Card
