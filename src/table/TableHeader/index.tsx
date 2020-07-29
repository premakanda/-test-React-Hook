import * as React from 'react';
import {PersonTypeKeys} from '../../create-data';
import {ColumnType} from '../../App';
import {SortOrderType} from '../index';

type TableHeaderPropsType = {
    sortOrder: SortOrderType
    sortProperty: PersonTypeKeys
    onSortChange: (property: PersonTypeKeys) => void
    columns: ColumnType[]
}
export const TableHeader: React.FC<TableHeaderPropsType> = React.memo((props) => <thead>
<tr>
    {props.columns.map(column => (
        <th key={column.key} onClick={() => props.onSortChange(column.key)}>
            {column.title} {props.sortProperty === column.key && (
            props.sortOrder === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>)}
        </th>
    ))}
</tr>
</thead>)
