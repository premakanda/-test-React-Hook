import * as React from 'react';
import {useCallback} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './paginator-styles.module.css';

type PaginatorPropsType = {
    pageCount: number
    onPageChange: (page: number) => void
    page: number
}
export const Paginator: React.FC<PaginatorPropsType> = (props) => {
    const handlePageChange = useCallback(({selected}: { selected: number }) => {
        props.onPageChange(selected + 1)
    }, []);

    return <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        forcePage={props.page - 1}
    />
}
