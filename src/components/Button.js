import React, { useContext } from "react";
import { AppsContext } from "../App";
const defaultClass = "py-2 px-4 shadow rounded bg-white";
const Primary = (props) => {
    const { isDark } = useContext(AppsContext);
    return (
        <button
            className={`${props?.className} ${
                isDark && "bg-blue text-white"
            } ${defaultClass}`}
        >
            {props.children}
        </button>
    );
};

export { Primary };
