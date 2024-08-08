import React, { useContext } from "react";
import styled from "styled-components";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/Context";
import Search from "../components/Search";

const DiscoverScreen = () => {
  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <Discover darkTheme={darkTheme}>
      <Content>
        <Search />
        <Section>
          <Subtitle darkTheme={darkTheme}>Categories</Subtitle>
          <CategoryContainer>
            {categories.map((item) => (
              <CategoryIcon key={item.name} onClick={() => setCategory(item.name)}>
                <CategoryImage src={item.pic} alt={item.name} />
                <Name darkTheme={darkTheme}>{item.name}</Name>
              </CategoryIcon>
            ))}
          </CategoryContainer>
        </Section>
        <Section>
          <Subtitle darkTheme={darkTheme}>Sources</Subtitle>
          <SourcesContainer>
            {sources.map((s) => (
              <SourceItem key={s.id} onClick={() => setSource(s.id)}>
                <SourceImage src={s.pic} alt={s.name} />
              </SourceItem>
            ))}
          </SourcesContainer>
        </Section>
      </Content>
    </Discover>
  );
};

export default DiscoverScreen;

const Discover = styled.div`
  padding: 20px;
  min-height: 100vh;
  background-color: ${(props) => (props.darkTheme ? "#1a1a1a" : "#f0f0f0")};
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 3px solid #007fff;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  justify-content: center;
`;

const CategoryIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const Name = styled.span`
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;

const SourcesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const SourceItem = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SourceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;