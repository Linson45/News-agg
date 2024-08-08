import React, { useContext, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { NewsContext } from "../API/Context";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext);

  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [page, setPage] = useState(1);
  const articlesPerPage = 10;

  const loadMoreArticles = useCallback(() => {
    if (!articles) return; // Guard clause to prevent error when articles is undefined

    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const newArticles = articles.slice(startIndex, endIndex);
    setDisplayedArticles(prevArticles => [...prevArticles, ...newArticles]);
    setPage(prevPage => prevPage + 1);
  }, [articles, page]);

  useEffect(() => {
    if (articles && articles.length > 0) {
      loadMoreArticles();
    }
  }, [articles, loadMoreArticles]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreArticles();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreArticles]);

  if (!articles) {
    return <LoadingMessage darkTheme={darkTheme}>Loading articles...</LoadingMessage>;
  }

  return (
    <NewsContainer darkTheme={darkTheme}>
      {displayedArticles.map((item, index) => (
        <SingleNews item={item} index={index} darkTheme={darkTheme} key={index} />
      ))}
      {displayedArticles.length < articles.length && (
        <LoadingMessage darkTheme={darkTheme}>Loading more articles...</LoadingMessage>
      )}
    </NewsContainer>
  );
};

export default NewsScreen;

const NewsContainer = styled.div`
  background-color: ${(props) => (props.darkTheme ? "black" : "white")};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

const LoadingMessage = styled.div`
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  margin-top: 20px;
  font-size: 16px;
`;