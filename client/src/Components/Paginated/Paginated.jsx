import React from "react";
import * as actions from "../../Redux/Actions/Actions";
import { useSelector, useDispatch } from "react-redux";


export const Paginated = (props) => {
 const {charactersPerPage, allDogs } = props
 const dispatch = useDispatch()

 const currentPage = useSelector(state => state.currentPage)
    let pages = [];
    for (let i = 1; i <= Math.ceil(allDogs / charactersPerPage); i++) {
        pages.push(i);
 }



    return (
        <div className='pagination'>


            { pages.map((page, index) => {
                return (

                       <button
                        key={index}
                        onClick={() => dispatch(actions.cambiarPag(page))}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>

                );
            })}
        </div>
    );
};