import { ILoginStudentResponse } from "../../interfaces/login/loginStudentResponse.interface";

export class LoginStudentResponse implements ILoginStudentResponse {
  token: string;

  constructor(loginStudentResponse: ILoginStudentResponse) {
      this.token = loginStudentResponse.token;
  }
}
