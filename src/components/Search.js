import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { NewsContext } from "../API/Context";
import SingleNews from "./SingleNews";

const Search = () => {
  const {
    darkTheme,
    news: { articles },
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (!text) {
      setSearchResults([]);
      setIsResultsVisible(false);
      return;
    }
    const filteredResults = articles.filter((query) =>
      query.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
    setIsResultsVisible(true);
  };

  const handleModal = (n) => {
    setModalVisible(true);
    setCurrentNews(n);
    setIsResultsVisible(false);
  };

  return (
    <Container ref={searchRef}>
      <SearchInput
        darkTheme={darkTheme}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setIsResultsVisible(true)}
        placeholder="Search for news"
      />
      {isResultsVisible && searchResults.length > 0 && (
        <SearchResults darkTheme={darkTheme}>
          {searchResults.slice(0, 10).map((n) => (
            <SearchResult
              key={n.title}
              darkTheme={darkTheme}
              onClick={() => handleModal(n)}
            >
              {n.title}
            </SearchResult>
          ))}
        </SearchResults>
      )}

      <Modal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={modalStyles}
      >
        <CloseButton onClick={() => setModalVisible(false)}>✕</CloseButton>
        <ModalContent>
          <SingleNews item={currentNews} darkTheme={darkTheme} />
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  background-color: ${(props) => (props.darkTheme ? "#333" : "#f0f0f0")};
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  border: 1px solid ${(props) => (props.darkTheme ? "#555" : "#ddd")};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => (props.darkTheme ? "#555" : "#007bff")};
  }
`;

const SearchResults = styled.div`
  position: absolute;
  z-index: 1;
  top: 100%;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${(props) => (props.darkTheme ? "#222" : "white")};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
`;

const SearchResult = styled.div`
  padding: 12px 15px;
  background-color: ${(props) => (props.darkTheme ? "#333" : "white")};
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.darkTheme ? "#444" : "#f0f0f0")};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => (props.darkTheme ? "#444" : "#eee")};
  }
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  z-index: 2;
`;

const ModalContent = styled.div`
  height: 100%;
`;