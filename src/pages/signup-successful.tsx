import React, { useEffect, useState } from "react";
import Navbar from "../components/sections/Navbar";
import { Student } from "../core-utils/classes/student/student.class";
import { studentInfoAfterSignupAPICall } from "../services/student/studentInfo.api";
import { BlankSlate } from "../components/ui-components/BlankSlate";

export const SignupSuccessful: React.FC = () => {
    const [student, setstudent] = useState<Student>(
        new Student({
            roll_number: "",
            name: "",
            current_sem: 0,
            current_year: 0,
            section: "",
            branch: "",
            current_status: "",
        })
    );

    useEffect(() => {
        studentInfoAfterSignupAPICall().then((res: Student) => {
            setstudent(res);
        });
    }, []);

    return (
        <div className="">
            <Navbar />
            <div className="m-4">
                <BlankSlate
                    title={`Welcome 👋, ${student.name}!`}
                    action={{ label: "View Showcase", link: "" }}
                >
                    <p className="text-4 text-secondary leading-150 ">
                        Thank you for registering with us. We are syncing your
                        information from vce.ac.in. Once we are done, we will
                        notify to your email{" "}
                        <span className="inline-block font-medium text-primary">
                            {student.roll_number}@vce.ac.in
                        </span>
                        . To get started, you should visit the showcase to know
                        more about the portal.
                    </p>
                </BlankSlate>
            </div>
        </div>
    );
};

export default SignupSuccessful;
