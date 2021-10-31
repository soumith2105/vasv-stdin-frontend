import { ICheckSignupStatus } from "../../interfaces/create/checkSignupStatus.interface";

export class CheckSignupStatus implements ICheckSignupStatus {
    status: boolean;

    constructor(checkSignupStatus: ICheckSignupStatus) {
        this.status = checkSignupStatus.status;
    }
}
