import Link from "next/link";
import React, { ReactNode } from "react";

interface IBlankSlateProps {
    title: string;
    children: ReactNode;
    action?: {
        label: string;
        link: string;
    };
}

export const BlankSlate: React.FC<IBlankSlateProps> = (props) => {
    return (
        <div className=" sm:border sm:border-primary sm:rounded-xl sm:text-center sm:py-10 md:max-w-7xl lg:mx-auto">
            <div className="max-w-2xl mb-6 sm:mx-3 md:mx-auto">
                <h4 className="mb-4 font-semibold text-2 leading-125">
                    {props.title}
                </h4>
                {props.children}
            </div>
            {props.action && (
                <Link href={props.action.link} passHref>
                    <button className="px-3 py-2 border rounded-md text-5 bg-button text-button border-button">
                        {props.action.label}
                    </button>
                </Link>
            )}
        </div>
    );
};
