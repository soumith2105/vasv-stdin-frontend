import React, { useEffect } from "react";
import { Logo } from "../elements/Logo";
import { NavAuth } from "../elements/NavAuth";

const Navbar: React.FC<any> = () => {
    // localStorage.theme = "light";
    useEffect(() => {
        localStorage.theme = "dark";
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    });

    return (
        <div className="p-2 w-full bg-dark-nav">
            <div className="">
                <div className="flex flex-row justify-between items-center text-primary-0">
                    <Logo />
                    <NavAuth />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
