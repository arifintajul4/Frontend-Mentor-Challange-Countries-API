import React, { useContext, useEffect } from "react";
import { AppsContext } from "../App";

export default function Navbar() {
    const { isDark, setIsDark } = useContext(AppsContext);

    const selectTheme = (value) => {
        localStorage.setItem("theme", value);
        setIsDark(value === "dark" ? true : false);
        const html = document.querySelector("html");
        html.classList.add(localStorage.getItem("theme"));
        if (value === "dark") {
            html.classList.remove("light");
        } else {
            html.classList.remove("dark");
        }
    };

    useEffect(() => {
        document
            .querySelector("html")
            .classList.add(localStorage.getItem("theme"));
        setIsDark(localStorage.getItem("theme") === "dark" ? true : false);
    }, [setIsDark]);

    return (
        <div
            className={`py-6 shadow-2xl  ${
                isDark
                    ? "bg-blue text-white "
                    : "bg-white border-gray border-b-2 border-opacity-25"
            }`}
        >
            <div className="container flex justify-between">
                <div>
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                </div>
                {isDark ? (
                    <button
                        className="text-yellow-500 flex items-center"
                        onClick={() => {
                            selectTheme("light");
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <span className="ml-2">Light Mode</span>
                    </button>
                ) : (
                    <button
                        className="text-blue-darker flex items-center"
                        onClick={() => {
                            selectTheme("dark");
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                        <span className="ml-2">Dark Mode</span>
                    </button>
                )}
            </div>
        </div>
    );
}
