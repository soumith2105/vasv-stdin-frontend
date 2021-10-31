import { ICreateUserResponse } from "../../interfaces/create/createUserResponse.interface";

export class CreateUserResponse implements ICreateUserResponse {
    roll_number: string;

    name: string;

    status: string;

    token: string;

    constructor(createUserResponse: ICreateUserResponse) {
        this.roll_number = createUserResponse.roll_number;
        this.name = createUserResponse.name;
        this.status = createUserResponse.status;
        this.token = createUserResponse.token;
    }
}
