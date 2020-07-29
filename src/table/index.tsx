import * as React from "react";
import {useCallback} from "react";
import {StyledTable} from "./styled";
import {Search} from "./Search";
import {PersonType, PersonTypeKeys} from '../create-data';
import {ColumnType} from '../App';
import {TableBody} from './TableBody';
import {TableHeader} from './TableHeader';
import {PageSize} from './PageSize';
import {usePagesCount, usePaginatedRows, useSearchedRows, useSortedRows} from '../hooks/hooks';
import {Paginator} from './Paginator';

interface IProps {
    columns: ColumnType[];
    data: PersonType[];
}

export type SortOrderType = 'asc' | 'desc';

export const Table = React.memo((props: IProps) => {

    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(5);
    const [sortProperty, setSortProperty] = React.useState<PersonTypeKeys>('firstName');
    const [sortOrder, setSortOrder] = React.useState<SortOrderType>('asc');
    const [searchValue, setSearchValue] = React.useState("");

    const searchedRows = useSearchedRows(props.data, searchValue);
    const pagesCount = usePagesCount(searchedRows, pageSize);
    const sortedRows = useSortedRows(searchedRows, sortProperty, sortOrder);
    const rowsForRendering = usePaginatedRows(sortedRows, page, pageSize);

    const handlePageSize = useCallback((page: number) => {
        setPageSize(page);
        setPage(1);
    }, []);
    const handleSearch = useCallback((value: string) => {
        setSearchValue(value);
        setPage(1);
    }, []);
    const handlePageChange = useCallback( (page: number) => {
        setPage(page);
    }, []);
    const handleSort = (property: PersonTypeKeys) => {
        sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder('asc');
        setSortProperty(property);
        console.log('sortProperty:', sortProperty);
        console.log('sortOrder:', sortOrder);
    };

    return (
        <div>
            <Search onSearch={handleSearch} value={searchValue}/>
            <PageSize size={pageSize} onChange={handlePageSize}/>
            <Paginator pageCount={pagesCount} onPageChange={handlePageChange} page={page} />
            <StyledTable>
                <TableHeader columns={props.columns} onSortChange={handleSort} sortOrder={sortOrder}
                             sortProperty={sortProperty}/>
                <TableBody columns={props.columns} rows={rowsForRendering}/>
            </StyledTable>
        </div>
    );
});



