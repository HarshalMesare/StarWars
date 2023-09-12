import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Navbar/Navbar';
import styles from './Films.module.scss';
import { fetchFilms } from '../../../Services/FilmsServices';

function Films() {

  const dispatch = useDispatch();
  const { Films, loading } = useSelector((state) => state.filmsState);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadFilms(1);
  }, []);

  async function loadFilms(_pageNumber) {
    const response = await dispatch(fetchFilms(_pageNumber));
    const _totalPages = Math.ceil(response.count / 10);
    setTotalPages(_totalPages);
  }

  const handlePrevious = () => {

    if (currentPage <= 1) {
      return;
    }

    const _page = currentPage - 1;
    setCurrentPage(_page);
    loadFilms(_page);
  };

  const handleNext = () => {

    if (currentPage >= totalPages) {
      return;
    }

    const _page = currentPage + 1;
    setCurrentPage(_page);
    loadFilms(_page);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {loading || !Films ? (
        <div className={styles.loadingContainer}>
        </div>
      ) : (
        <div className={`${styles.cardsContainer} ${styles.marginTop}`}>
          {Films.results.map((person, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardImage}>
                <img
                  src={`https://source.unsplash.com/300x200/?starwars,${person.director}`}
                  alt={person.director}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.cardTitle}>{person.director}</h3>
              <p className={styles.cardBody}>Height: {person.title}</p>
              <button className={styles.cardButton}>Action</button>
            </div>
          ))}
        </div>
      )}

      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.pageNumber}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={styles.paginationButton}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Films;
