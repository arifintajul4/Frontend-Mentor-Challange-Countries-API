import React, { useContext } from "react";
import { AppsContext } from "../App";

export default function Card({ img, title, population, region, capital }) {
    const { isDark } = useContext(AppsContext);
    return (
        <div
            className={`rounded shadow overflow-hidden ${isDark && "bg-blue"}`}
        >
            <img src={img} className="w-full h-44" alt={`${title} Flag`} />
            <div className="px-4 pt-6 pb-10">
                <h1 className="font-bold text-lg mb-4">{title}</h1>
                <ul className="font-semibold">
                    <li>
                        Population:{" "}
                        <span className="font-light">
                            {new Intl.NumberFormat().format(population)}
                        </span>
                    </li>
                    <li>
                        Region: <span className="font-light">{region}</span>
                    </li>
                    <li>
                        Capital: <span className="font-light">{capital}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
