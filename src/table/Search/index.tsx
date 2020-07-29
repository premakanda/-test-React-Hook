import * as React from "react";
import {Input} from '../../components/styled';

interface IProps {
    onSearch: (value: string) => void;
    value: string
}

export const Search = React.memo((props: IProps) => {
    return (
        <Input
            value={props.value}
            type="search"
            onChange={e => props.onSearch(e.target.value)}
            placeholder="Search"
        />
    );
});
