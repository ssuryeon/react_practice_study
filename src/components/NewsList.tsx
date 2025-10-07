import styled from 'styled-components';
import NewsItem from './NewsItem';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Iarticle} from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

interface Inewslist {
    category: string;
}

const NewsList = ({category}:Inewslist) => {
    const [loading, response, error] = usePromise<Iarticle[]>(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=a7782ebd5c7a4caea5e67a34de10bb94`)
                    .then(res => res.data.articles);
    }, [category]);
    const [articles, setArticles] = useState<Iarticle[]>([]);
    return (
        <NewsListBlock>
            {loading? '대기 중...' : response && response.map((article:Iarticle) => <NewsItem key={article.url} article={article} />)}
        </NewsListBlock>
    )
}

export default NewsList;