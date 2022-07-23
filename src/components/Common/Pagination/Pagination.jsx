import React from "react";
import cls from "./Pagination.module.scss"

let Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={cls.numbers_page}>
            <span>Выбрать страницу:</span>
            {pages.map(page => <span onClick={() => {
                props.onPageChanged(page)
            }} className={props.currentPage === page && cls.selected_page}>{page}</span>)}
        </div>
    )
}
export default Pagination;