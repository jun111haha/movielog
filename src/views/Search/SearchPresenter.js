import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Message from "../../component/Message";
import Nav from "../../component/Nav";
import Loading from "../../component/Loading";
import Poster from "../../component/Poster";
import { Section } from "../../component/Section";
import { HelmetProvider, Helmet } from "react-helmet-async";

// const Container = styled.div`
//   width: 100%;
// `;

const Container = styled.div``;

const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  align-items: center;
  padding: 0px 20px;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 50px;
  display: flex;
`;

const TextInput = styled.input`
  all: unset;
  color: grey;
  height: 50px;
  font-size: 2rem;
  text-align: center;
  &:focus {
    border-bottom: 2px solid #ffff;
    transition: border-bottom 0.3s ease-in-out;
  }
  &::placeholder {
    color: grey;
  }
`;

const Button = styled.button`
  all: unset;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 20px;
  cursor: pointer;
  color: white;
`;

const SearchBox = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-left: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const SearchPresenter = (props) => {
  const {
    search,
    movieSearchResult,
    tvSearchResult,
    handleSubmit,
    changeInput,
    loading,
    movieSearchEmpty,
    tvSearchEmpty,
  } = props;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>검색</title>
        </Helmet>
      </HelmetProvider>
      <Container>
        <Nav />
        <Form onSubmit={handleSubmit}>
          <SearchBox>
            <TextInput
              placeholder="검색어를 입력해주세요"
              value={search}
              onChange={changeInput}
            ></TextInput>
            <Button>
              <SearchIcon />
            </Button>
          </SearchBox>
        </Form>
        {loading ? (
          <Loading />
        ) : (
          <>
            {movieSearchResult && movieSearchResult.length > 0 && (
              <>
                <Title>영화</Title>
                <Section margin={"50px"}>
                  {movieSearchResult.map((data, index) => {
                    return (
                      <Poster
                        id={data.id}
                        key={index}
                        imgUrl={data.poster_path}
                        title={data.title ? data.title : data.original_title}
                        rating={data.vote_average}
                        isMovie={true}
                      ></Poster>
                    );
                  })}
                </Section>
              </>
            )}
            {tvSearchResult && tvSearchResult.length > 0 && (
              <>
                <Title>TV프로그램</Title>
                <Section margin={"50px"}>
                  {tvSearchResult.map((data, index) => {
                    return (
                      <Poster
                        id={data.id}
                        key={index}
                        imgUrl={data.poster_path}
                        title={data.name}
                        rating={data.vote_average}
                      ></Poster>
                    );
                  })}
                </Section>
              </>
            )}
            {movieSearchEmpty && tvSearchEmpty && (
              <Message text="검색결과가 없습니다." color="white" />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default SearchPresenter;
