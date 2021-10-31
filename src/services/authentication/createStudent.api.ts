import { API_ROUTES, DOMAIN, HEADER_WITHOUT_AUTH } from "../constants";
import { CreateFormRequest } from "../../core-utils/interfaces/create/createUserForm.interface";
import { CreateUserResponse } from "../../core-utils/classes/create/createUserResponse.class";
import { CheckSignupStatus } from "../../core-utils/classes/create/checkSignupStatus.class";
import { getRequest, postRequest } from "../fetchMethods";

export const createStudentAPICall = async (
    data: CreateFormRequest
): Promise<CreateUserResponse> => {
    const url = `${DOMAIN}/${API_ROUTES.CREATE}/`;
    const res = await postRequest(url, data, HEADER_WITHOUT_AUTH);
    return new CreateUserResponse(res);
};

export const checkSignupProgressAPICall =
    async (): Promise<CheckSignupStatus> => {
        const token = localStorage.getItem("syncing") || "";
        const url = `${DOMAIN}/${API_ROUTES.CHECK_SIGNUP}/`;
        const headers = {
            ...HEADER_WITHOUT_AUTH,
            Authorization: `Token ${token}`,
        };
        const res = await getRequest(url, headers);
        return new CheckSignupStatus(res);
    };
