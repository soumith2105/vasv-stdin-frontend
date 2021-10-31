import { LoginStudentResponse } from "../../core-utils/classes/login/loginStudentResponse.class";
import { LoginFormInterface } from "../../core-utils/interfaces/login/loginForm.interface";
import { API_ROUTES, DOMAIN, HEADER_WITHOUT_AUTH } from "../constants";
import { postRequest } from "../fetchMethods";

export const loginStudentAPICall = async (
    data: LoginFormInterface
): Promise<LoginStudentResponse> => {
    const url = `${DOMAIN}/${API_ROUTES.LOGIN}/`;
    const res = await postRequest(url, data, HEADER_WITHOUT_AUTH);
    return new LoginStudentResponse(res);
};
