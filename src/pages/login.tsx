import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Form, Formik, Field } from "formik";
import { LoginFormInterface } from "../core-utils/interfaces/login/loginForm.interface";
import { useRouter } from "next/router";
import { loginStudentAPICall } from "../services/authentication/loginStudent.api";
import { checkSignupProgressAPICall } from "../services/authentication/createStudent.api";

const Login: React.FC = () => {
    const [user, setUser] = useState<LoginFormInterface>({
        roll_number: "",
        password: "",
    });

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authtoken") || "";
        if (token !== "") {
            const signup = localStorage.getItem("signup") || "";
            if (signup !== "true") {
                router.push("/dashboard");
            }
        }
    });

    useEffect(() => {
        if (user.roll_number !== "" && user.password !== "") {
            loginStudentAPICall(user).then((res) => {
                if (res.token) {
                    localStorage.setItem("syncing", res.token);
                    checkSignupProgressAPICall().then((res) => {
                        if (res.status) {
                            const token = localStorage.getItem("syncing") || "";
                            localStorage.setItem("authtoken", token);
                            localStorage.removeItem("syncing");
                            router.push("/dashboard");
                        } else {
                            router.push("/signup-successful");
                        }
                    });
                }
            });
        }
    }, [router, user]);

    return (
        <div className="max-w-sm p-4 mx-auto mt-5">
            <div className="w-full pb-5 text-center">
                <div className="py-3 pt-2 tracking-tighter text-20 leading-100">
                    <span className="font-bold">the vasv</span> deets
                </div>
                <p className="font-medium tracking-tight text-l leading-100">
                    Sign into your account
                </p>
            </div>
            <Formik
                initialValues={user}
                onSubmit={(data) => {
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
                                placeholder="Enter your password"
                            />
                        </div>
                        <a className="text-link text-6">Forgot password?</a>
                        <div className="flex flex-col gap-3 mt-2">
                            <button
                                type="submit"
                                className="w-full p-2 border rounded-md text-5 bg-button-primary text-button-primary border-button-primary"
                            >
                                Sign in
                            </button>
                            <Link href={"/create"}>
                                <a className="block w-full p-2 text-center border rounded-md text-5 bg-button text-button border-button">
                                    Create your account
                                </a>
                            </Link>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
