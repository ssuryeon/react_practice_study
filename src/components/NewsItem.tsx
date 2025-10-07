import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
        & + & { // 형제 중 같은 타입인 것을 선택
            margin-top: 3rem;
        }
    }
`;

export interface Iarticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

interface Inewsitem {
    article: Iarticle;
}

const NewsItem = ({article}:Inewsitem) => {
    const {title, description, url, urlToImage} = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;