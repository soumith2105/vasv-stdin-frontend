import { QueryFunctionContext } from "react-query";
import { NewsResponse } from "../../core-utils/interfaces/news/newsResponse.interface";
import { API_ROUTES, DOMAIN } from "../constants";

export const fetchNews = (key: QueryFunctionContext<"news", any>) => {
    const url = `${DOMAIN}/${API_ROUTES.NEWS}/`;
    console.log(url, key);
    return fetch(url, {
        method: "GET",
    }).then((res) => res.json());
};

export const news: NewsResponse = {
    links: {
        next: "http://localhost:8000/news/?page=2",
        previous: null,
    },
    results: [
        {
            id: 1,
            index: "Time Table",
            published_date: "2021-05-01",
            content:
                "Online I-Internal Test Time-Table for B.E. II Semester for the year 2020-2021",
            link: "https://vce.ac.in/Downloads_AEB/BE-II-SEMESTER-I-INTERNAL-TIME-TABLE-30-04-2021.pdf",
            categories: ["Examination", "Timetable"],
        },
        {
            id: 2,
            index: "Result Sheet",
            published_date: "2021-04-30",
            content:
                "Revaluation Result of BE III, V, and VII Semester (CBCS) Regular Examinations held in Feb./March 2021",
            link: "https://vce.ac.in/Downloads_COE/RV_Result_BE_III_V_III_sem_Main_30-04-2021.pdf",
            categories: ["Examination", "Revaluation", "Result"],
        },
        {
            id: 3,
            index: "Formats",
            published_date: "2021-04-30",
            content:
                "To obtain Certificates offline (Transcripts /Duplicate of SGR CGR ,etc.,)",
            link: "https://vce.ac.in/Downloads_COE/Formats_Fee_for_transcripts _Duplicate_SGR_30-04-2021.pdf",
            categories: ["Information"],
        },
        {
            id: 4,
            index: "Time Table",
            published_date: "2021-04-28",
            content:
                "First Quiz Test Online Time-Table for B.E. II Semester for the year 2020-2021",
            link: "https://vce.ac.in/Downloads_AEB/Circular_Online_BE-II_SEM_QUIZ_TEST_Time_table_28-04-2021.pdf",
            categories: ["Examination", "Timetable"],
        },
        {
            id: 5,
            index: "Result Sheet",
            published_date: "2021-04-20",
            content:
                "Revaluation Results M.E./M.Tech. (CBCS) II Semester Makeup Examinations held in March-2021.",
            link: "https://vce.ac.in/Downloads_COE/ME_MTECH_II_sem_Makeup_RV_result_sheet_20-04-2021.pdf",
            categories: [
                "Supplementary",
                "Examination",
                "Revaluation",
                "Result",
            ],
        },
        {
            id: 6,
            index: "Time Table",
            published_date: "2021-04-19",
            content: "ME/M.TECH II SEMESTER ONLINE TIME TABLES",
            link: "https://vce.ac.in/Downloads_AEB/ME_MTECH_IISEM_ONLINE_CLASS_TIMETABLE_19-04-2021.pdf",
            categories: ["Timetable"],
        },
        {
            id: 7,
            index: "Time Table",
            published_date: "2021-04-10",
            content:
                "ONLINE I- INTERNAL TEST TIME - TABLE FOR B.E IV SEMESTER FOR THE YEAR 2020-2021",
            link: "https://vce.ac.in/Downloads_AEB/ONLINE-BE-IV-VI-VIII-SEM-I-INTERNAL-TIMETABLE-09-04-2021.pdf",
            categories: ["Examination", "Timetable"],
        },
        {
            id: 8,
            index: "Time Table",
            published_date: "2021-04-07",
            content: "BE II Semester Online Time Table 2021 w.e.f. 12-04-2021",
            link: "https://vce.ac.in/Downloads_AEB/BE-II-Semester-Online-Time-Table-06-04-2021.pdf",
            categories: ["Timetable"],
        },
        {
            id: 9,
            index: "Circular",
            published_date: "2021-04-03",
            content: "YOUNG LEADER AWARD LIST-2021",
            link: "https://vce.ac.in/Downloads_AEB/CIRCULAR-072-YOUNG-LEADER-AWARD-LIST-2021_03-04-2021.pdf",
            categories: ["Information"],
        },
        {
            id: 10,
            index: "Circular",
            published_date: "2021-03-30",
            content:
                "It is hereby informed that all the Supplementary Examinations of BE - II, IV & VI Semesters scheduled from 30.03.2021 have been postponed as per the directions of the Government and Osmania University. The revised schedule will be announced later.",
            link: "#",
            categories: ["Supplementary", "Examination"],
        },
    ],
};
