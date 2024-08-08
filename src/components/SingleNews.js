import React from "react";
import styled from "styled-components";

const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image+Available";

const SingleNews = ({ item, darkTheme }) => {
  const openURL = (url) => {
    window.open(url, "_blank");
  };


  return (
    <Container onClick={() => openURL(item.url)}>
      <NewsImage src={item.urlToImage || fallbackImage} alt={item.title} />
      <Description darkTheme={darkTheme}>
        <Title darkTheme={darkTheme}>{item.title}</Title>
        <Content darkTheme={darkTheme}>{item.description}</Content>
        <Author darkTheme={darkTheme}>
          Feed by <strong>{item.author ?? "unknown"}</strong>
        </Author>
        <ImagesContainer>
          <SecondaryImage src={item.urlToImage || fallbackImage} alt={item.title} />
          <SecondaryImage src={item.urlToImage || fallbackImage} alt={item.title} />
        </ImagesContainer>
      </Description>
      <FooterBackground src={item.urlToImage || fallbackImage} alt={item.title}>
        <Footer>
          <FooterText>'{item?.content?.slice(0, 45) || item.description?.slice(0, 45)}...'</FooterText>
          <ReadMore>Read More</ReadMore>
        </Footer>
      </FooterBackground>
    </Container>
  );
};
export default SingleNews;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

const Description = styled.div`
  padding: 20px;
  flex: 1;
  background-color: ${(props) => (props.darkTheme ? "#282C35" : "white")};
  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const Content = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Author = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SecondaryImage = styled.img`
  width: calc(50% - 7.5px);
  height: 150px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 200px;
  }
`;

const FooterBackground = styled.div`
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    position: relative;
    height: auto;
    padding: 30px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: white;
  margin-bottom: 10px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ReadMore = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: white;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;