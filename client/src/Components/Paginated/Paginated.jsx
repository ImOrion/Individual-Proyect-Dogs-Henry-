import React from "react";
import * as actions from "../../Redux/Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "../Paginated/Paginated.module.css";

export const Paginated = (props) => {
  const { dogPerPage, allDogs } = props;
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage);
  let pages = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {currentPage !== 1 ? (
        <>
          <button onClick={() => dispatch(actions.changePage(currentPage - 1))}>
            {"⇦"}
          </button>
          <button onClick={() => dispatch(actions.changePage(currentPage - 1))}>
            {currentPage - 1}
          </button>
        </>
      ) : (
        <>
          <button disable="true">{"⇦"}</button>
          <button disable="true">{currentPage - 1}</button>
        </>
      )}

      <button className={styles.active}>{currentPage}</button>

      {currentPage !== pages[pages.length - 1] ? (
        <>
          <button onClick={() => dispatch(actions.changePage(currentPage + 1))}>
            {currentPage + 1}
          </button>
          <button onClick={() => dispatch(actions.changePage(currentPage + 1))}>
            {"⇨"}
          </button>
        </>
      ) : (
        <>
          <button disable="true">{currentPage + 1}</button>
          <button disable="true">{"⇨"}</button>
        </>
      )}
    </div>
  );
};
