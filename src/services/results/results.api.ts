import { SubjectMarks } from "../../core-utils/classes/results.subjectsMarks.class";
import { API_ROUTES, DOMAIN } from "../constants";
import { getRequest } from "../fetchMethods";

export const semesterResultsAPICall = async (
    semester: any
): Promise<SubjectMarks[]> => {
    const url = `${DOMAIN}/${API_ROUTES.RESULTS_SUBJECT_MARKS}/?semester=${semester}`;
    const res = await getRequest(url);
    return res.map((marks: any) => {
        return new SubjectMarks(marks);
    });
};
