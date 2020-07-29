import {useMemo} from 'react';
import {PersonType, PersonTypeKeys} from '../create-data';
import {SortOrderType} from '../table';

export const useSearchedRows = (
    rows: PersonType[],
    searchValue: string) => {
    return useMemo(() => {
        return searchValue
            ? rows.filter(item => {
                return Object.keys(item)
                // skip search by id
                    .filter(key => key != "id")
                    .some(key => item[key as PersonTypeKeys].toString().indexOf(searchValue) > -1)
            })
            : rows
    }, [searchValue, rows]);
}

export const usePagesCount = (rows: PersonType[], pageSize: number) => {
    return useMemo(() => Math.ceil(rows.length / pageSize), [pageSize, rows]);
}

export const useSortedRows = (rows: PersonType[],
                              sortProperty: PersonTypeKeys,
                              sortOrder: SortOrderType) => {
    return useMemo(() => {
        return [...rows]
            .sort((a: PersonType, b: PersonType) => {
                const aValue = a[sortProperty];
                const bValue = b[sortProperty];
                if (aValue === bValue) return 0;
                if (a[sortProperty] > b[sortProperty]) {
                    return sortOrder === 'asc' ? 1 : -1;
                } else {
                    return sortOrder === 'asc' ? -1 : 1;
                }
            })
    }, [sortProperty, rows, sortOrder])
}
export const usePaginatedRows = (rows: PersonType[],
                                 page: number,
                                 pageSize: number) => {
    return useMemo(() => {
            const filteredRows = rows
                .filter((item, index) => index >= ((page - 1) * pageSize) && index < page * pageSize);
            return filteredRows;
        },
        [pageSize, page, rows]);
}


