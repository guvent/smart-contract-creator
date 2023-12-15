import React from "react";
import Spinner from "../../components/Spinner";

export default function State({ children, status }) {
    return (
        <div
            className={"md:max-w-4xl mx-auto text-center transition-all duration-500 mt-10 ".concat(
                status === "success"
                    ? "text-green-800"
                    : status === "failed"
                    ? "text-red-800"
                    : status === "pending"
                    ? "text-gray-500"
                    : "text-black",
            )}
        >
            <div className="flex flex-row mx-[14vh] content-center">
                <Spinner status={status} />
                <h1 className="text-3xl md:text-2xl leading-tight font-bold tracking-tighter transition-all duration-500 mx-2">
                    {children}
                </h1>
            </div>
        </div>
    );
}
