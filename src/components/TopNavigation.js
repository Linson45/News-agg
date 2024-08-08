import React, { useContext } from "react";
import styled from "styled-components";
import { NewsContext } from "../API/Context";
import { 
  FaAdjust, 
  FaArrowLeft, 
  FaArrowRight, 
  FaSyncAlt 
} from "react-icons/fa";

const TopNavigation = ({ index, setIndex }) => {
  const { darkTheme, setDarkTheme, fetchNews } = useContext(NewsContext);

  return (
    <Container darkTheme={darkTheme}>
      {index === 0 ? (
        <Button onClick={() => setDarkTheme(!darkTheme)}>
          <Icon>
            <FaAdjust />
          </Icon>
        </Button>
      ) : (
        <Button onClick={() => setIndex(index === 0 ? 1 : 0)}>
          <Icon>
            <FaArrowLeft />
          </Icon>
          <Text darkTheme={darkTheme}>Discover</Text>
        </Button>
      )}

      <CenterText darkTheme={darkTheme}>
        {index ? "All News" : "Discover"}
      </CenterText>
      
      {index ? (
        <Button onClick={() => fetchNews("general")}>
          <Icon>
            <FaSyncAlt />
          </Icon>
        </Button>
      ) : (
        <Button onClick={() => setIndex(index === 0 ? 1 : 0)}>
          <Text darkTheme={darkTheme}>All News</Text>
          <Icon>
            <FaArrowRight />
          </Icon>
        </Button>
      )}
    </Container>
  );
};

export default TopNavigation;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 0.5px solid black;
  background-color: ${(props) => (props.darkTheme ? "#282C35" : "white")};
`;

const CenterText = styled.div`
  padding-bottom: 6px;
  border-bottom: 5px solid #007FFF;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 80px;
  justify-content: space-between;
`;

const Icon = styled.div`
  font-size: 24px;
  color: #007FFF;
`;

const Text = styled.div`
  font-size: 16px;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;
