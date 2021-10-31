import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CreateFormRequest } from "../core-utils/interfaces/create/createUserForm.interface";
import {
    checkSignupProgressAPICall,
    createStudentAPICall,
} from "../services/authentication/createStudent.api";
import { AuthenticationStatusEnum } from "../core-utils/status-codes/authentication-status.enum";
import { CreateUserResponse } from "../core-utils/classes/create/createUserResponse.class";
import { Field, Form, Formik } from "formik";
import Link from "next/link";

const checkToken = (key: string): boolean => {
    return !!localStorage.getItem(key);
};

const Create: React.FC = () => {
    const router = useRouter();

    const [user, setUser] = useState<CreateFormRequest>({
        roll_number: "",
        password: "",
    });

    useEffect(() => {
        const authenticated = checkToken("authtoken") || checkToken("syncing");
        if (authenticated) {
            if (checkToken("syncing")) {
                checkSignupProgressAPICall().then((res) => {
                    console.log(res);
                    if (res.status) {
                        const token = localStorage.getItem("syncing") || "";
                        localStorage.setItem("authtoken", token);
                        localStorage.removeItem("syncing");
                        router.push("/dashboard");
                    } else {
                        router.push("/signup-successful");
                    }
                });
            } else {
                router.push("/signup-successful");
            }
        }
    });

    useEffect(() => {
        if (user.roll_number !== "" && user.password !== "") {
            createStudentAPICall(user).then((res: CreateUserResponse) => {
                if (
                    res.status ===
                    AuthenticationStatusEnum.USER_SIGNUP_SUCCESSFUL
                ) {
                    localStorage.setItem("syncing", res.token);
                    router.push("/signup-successful");
                }
            });
        }
    }, [router, user]);

    return (
        <div className="max-w-sm p-4 mx-auto my-5">
            <div className="w-full pb-5 text-center">
                <div className="py-3 pt-2 tracking-tighter text-20 leading-100">
                    <span className="font-bold">the vasv</span> deets
                </div>
                <p className="font-medium tracking-tight text-l leading-100">
                    Create your account
                </p>
            </div>
            <Formik
                initialValues={user}
                onSubmit={(data: CreateFormRequest) => {
                    setUser(data);
                }}
            >
                <Form>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col justify-start gap-2">
                            <label className="text-5">Roll Number</label>
                            <Field
                                name="roll_number"
                                type="text"
                                className="p-2 border rounded-md text-5 bg-canvas-inset border-primary placeholder-placeholder"
                                placeholder="Enter your roll number"
                            />
                        </div>
                        <div className="flex flex-col justify-start gap-2">
                            <label className="text-5">Password</label>
                            <Field
                                name="password"
                                type="password"
                                className="p-2 border rounded-md text-5 bg-canvas-inset border-primary placeholder-placeholder"
                                placeholder="Enter your vce password"
                            />
                        </div>
                        <div className="flex flex-col gap-3 mt-2">
                            <button
                                type="submit"
                                className="w-full p-2 border rounded-md text-5 bg-button-primary text-button-primary border-button-primary"
                            >
                                Create your account
                            </button>
                            <Link href={"/login"}>
                                <a className="block w-full p-2 text-center border rounded-md text-5 bg-button text-button border-button">
                                    Have an account already? Sign in
                                </a>
                            </Link>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Create;
