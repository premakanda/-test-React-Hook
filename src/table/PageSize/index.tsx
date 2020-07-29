import * as React from 'react';
import {Select} from '../../components/styled';

type PageSizePropsType = {
    sizes?: number[]
    size: number
    onChange: (pageSize: number) => void
}
export const PageSize: React.FC<PageSizePropsType> = React.memo( ({onChange, size, sizes = [5, 10, 50, 100]}) => {
    return <Select
        value={size}
        onChange={(e) => onChange(+e.currentTarget.value)}>
        {sizes.map(s => <option key={s} value={s}>{s}</option>)}
    </Select>
})
