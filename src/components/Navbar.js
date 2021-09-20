import React, { useContext, useEffect } from "react";
import { AppsContext } from "../App";

export default function Navbar() {
    const { isDark, setIsDark } = useContext(AppsContext);

    const selectTheme = (value) => {
        localStorage.setItem("theme", value);
        setIsDark(value == "dark" ? true : false);
        const html = document.querySelector("html");
        html.classList.add(localStorage.getItem("theme"));
        if (value == "dark") {
            html.classList.remove("light");
        } else {
            html.classList.remove("dark");
        }
    };

    useEffect(() => {
        document
            .querySelector("html")
            .classList.add(localStorage.getItem("theme"));
        setIsDark(localStorage.getItem("theme") == "dark" ? true : false);
    }, []);

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
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="ml-2 font-bold">Light Mode</span>
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
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        <span className="ml-2 font-bold">Dark Mode</span>
                    </button>
                )}
            </div>
        </div>
    );
}
