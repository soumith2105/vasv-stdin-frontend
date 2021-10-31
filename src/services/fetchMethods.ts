import { HEADER_WITHOUT_AUTH } from "./constants";

const getTokenHeaders = (): HeadersInit => {
    const token = localStorage.getItem("authtoken");
    if (token) {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
    }
    return HEADER_WITHOUT_AUTH;
};

export const getRequest = async (
    url: string,
    headers: HeadersInit = getTokenHeaders()
): Promise<any> => {
    const res = await fetch(url, {
        method: "GET",
        headers,
    });
    return await res.json();
};

export const postRequest = async (
    url: string,
    body: any,
    headers: HeadersInit = getTokenHeaders()
): Promise<any> => {
    const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
    });
    return await res.json();
};
