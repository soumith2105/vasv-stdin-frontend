import React from "react";

interface ITableProps {
    columns: string[];
    data: (number | string)[][];
}

export const Table: React.FC<ITableProps> = ({
    columns,
    data,
}: ITableProps) => {
    return (
        <div>
            {columns}
            {data}
        </div>
    );
};
