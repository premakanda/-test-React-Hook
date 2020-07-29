import {PersonType} from '../../create-data';
import {ColumnType} from '../../App';
import * as React from 'react';

type TableBodyPropsType = {
    rows: PersonType[]
    columns: ColumnType[]
}
export const TableBody: React.FC<TableBodyPropsType> = React.memo((props) => <tbody>
{props.rows
    .map(item => (
        <tr key={item.id}>
            {props.columns.map((column) => (
                <td key={column.key}>
                    {
                        column.render
                            ? column.render(item[column.key])
                            : item[column.key]}
                </td>
            ))}
        </tr>
    ))}
</tbody>)
