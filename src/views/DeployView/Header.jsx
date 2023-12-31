import React from "react";

export default function Header() {
    return (
        <div className="container mx-auto">
            <div className="md:max-w-4xl mx-auto text-center mt-10">
                <h1 className="text-3xl md:text-3xl leading-tight font-bold tracking-tighter mb-6">
                    Deploy started, please wait until the complete operation...
                </h1>
            </div>
        </div>
    );
}
