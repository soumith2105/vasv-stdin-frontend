import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SubjectMarks } from "../../core-utils/classes/results.subjectsMarks.class";
import { semesterResultsAPICall } from "../../services/results/results.api";

interface ITableProps {
  columns: string[];
  data: (number | string)[][] | null;
}

const SemesterResults = () => {
    const [data, setData] = useState<SubjectMarks[]>([]);
    const router = useRouter();
    const { semester } = router.query;
    // const { data, isLoading, isError } = useQuery(
    //   ["semResults", semester],
    //   semesterResultsAPICall
    // );
    useEffect(() => {
        semesterResultsAPICall(semester).then((res) => setData(res));
    });

    useEffect(() => {
        const tableInternalRow: ITableProps = {
            columns: ["Subject", "Internal1", "Internal2"],
            data: [],
        };
        const tableAssignmentRow: ITableProps = {
            columns: ["Subject", "Assignment1", "Assignment2", "Assignment3"],
            data: [],
        };
        const tableQuizRow: ITableProps = {
            columns: ["Subject", "Quiz1", "Quiz2", "Quiz3"],
            data: [],
        };
        data.forEach((subjectMark) => {
            // @ts-ignore
            tableInternalRow.data.push([
                subjectMark.subject,
                subjectMark.int1,
                subjectMark.int2,
            ]);
            // @ts-ignore
            tableAssignmentRow.data.push([
                subjectMark.subject,
                subjectMark.assn1,
                subjectMark.assn2,
                subjectMark.assn3,
            ]);
            // @ts-ignore
            tableQuizRow.data.push([
                subjectMark.subject,
                subjectMark.quiz1,
                subjectMark.quiz2,
                subjectMark.quiz3,
            ]);
        });
        console.log(tableInternalRow, tableAssignmentRow, tableQuizRow);
    }, [data]);
    return <div>{{ data }}</div>;
};

export default SemesterResults;
