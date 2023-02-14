import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

import { useEffect, useState } from 'react';

const NewsItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 1rem;
  *,
  &:before,
  &:after {
    box-sizing: border-box;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=5865802cda1345e8a3667d3cc622627d`);
  }, [category]);

  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=5865802cda1345e8a3667d3cc622627d`);
  //       setArticles(res.data.articles);
  //       // console.log(res.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);

  if (loading) {
    return <NewsItemBlock>통신 대기중..</NewsItemBlock>;
  }
  if (!response) {
    return null; // map함수를 사용하기 전에 꼭  articles를 조회하여 null인지 아닌지 확인해야합니다~  (무효하면 흰 페이지만 나옴)
  }
  if (error) {
    return <NewsItemBlock>에러</NewsItemBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsItemBlock>
      <h2 style={{ fontWeight: '900', marginBlock: '1em' }}>News Stand 📰</h2>
      {articles.map((item) => (
        <NewsItem key={item.url} article={item} />
      ))}
    </NewsItemBlock>
  );
};
export default NewsList;
