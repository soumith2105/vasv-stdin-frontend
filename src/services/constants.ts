export const DOMAIN = process.env.BACKEND_URL;
export const WS_DOMAIN = process.env.BACKEND_WS_URL;

// export const HEADER_WITH_AUTH: HeadersInit = getTokenHeaders();
export const HEADER_WITHOUT_AUTH: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const API_ROUTES = {
    NEWS: "news",
    ATTENDANCE: "attendance",
    LOGIN: "student/login",
    CREATE: "student/signup",
    STUDENT_DETAILS: "student",
    CHECK_SIGNUP: "syncing/status",
    RESULTS_SUBJECT_MARKS: "subject/marks",
};
