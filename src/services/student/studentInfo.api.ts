import { Student } from "../../core-utils/classes/student/student.class";
import { API_ROUTES, DOMAIN, HEADER_WITHOUT_AUTH } from "../constants";

export const studentInfoAfterSignupAPICall = async (): Promise<Student> => {
    const token = localStorage.getItem("syncing");
    let headers = HEADER_WITHOUT_AUTH;
    if (token) {
        headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
    }
    const url = `${DOMAIN}/${API_ROUTES.STUDENT_DETAILS}/`;
    const res = await fetch(url, {
        method: "GET",
        headers,
    }).then((res) => res.json());
    return new Student(res);
};
