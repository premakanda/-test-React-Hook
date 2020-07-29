import * as React from "react";
import { Table } from "./table";
import {useEffect, useMemo, useState} from "react";
import {createData, PersonType} from "./create-data";

export type ColumnType = {
    title: string,
    render?: (value: any) => string,
    key: keyof PersonType
};

export default function App() {
    const [data, setData] = useState<any>([])
    let factory = (): Array<ColumnType>  => [
        { key: "firstName", title: "First name" },
        { key: "lastName", title: "Last name" },
        { key: "age", title: "Age" },
        { key: "visits", title: "Visits" },
        { key: "status", title: "Status" },
        { key: "tags", title: "Tags", render: (value: any) => value.join(", ") }
    ];
    const columns: ColumnType[] = useMemo(factory, []);

    useEffect(() => {
       setData(createData(50));
    }, [])


  return (
    <div>
      <h1>Test (1 lvl)</h1>
      <h3>Description of the task in the README.md</h3>
      <Table columns={columns} data={data} />
    </div>
  );
}
