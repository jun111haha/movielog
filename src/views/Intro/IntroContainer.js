import React, { useState, useEffect, useRef } from "react";
import { moviesApi } from "../../Api";
import IntroPresenter from "./IntroPresenter";

const IntroContainer = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const {
        data: { results: popular },
      } = await moviesApi.popular();

      setMovie(popular[Math.floor(Math.random() * popular.length)]);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutside);

    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  });

  const clickModalOutside = (event) => {
    if (isModalOpen && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IntroPresenter
      movie={!loading && movie}
      loading={loading}
      isModalOpen={isModalOpen}
      openModal={openModal}
      modalRef={modalRef}
    />
  );
};

export default IntroContainer;
