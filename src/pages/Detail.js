import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppsContext } from "../App";
import * as Button from "../components/Button";

export default function Card() {
    let { countryCode } = useParams();
    const { isDark } = useContext(AppsContext);
    const [country, setCountry] = useState(null);
    const [borderList, setBorderList] = useState([]);

    const getBorderName = (borders, idx) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${borders[idx]}`)
            .then((res) => res.json())
            .then((res) => {
                idx++;
                if (borders.length !== idx) {
                    getBorderName(borders, idx);
                }
                borderList.push(res.name);
                setBorderList([...borderList]);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            .then((data) => data.json())
            .then((data) => {
                setCountry(data);
                data.borders.length > 0 && getBorderName(data.borders, 0);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div
            className={`min-h-screen ${
                isDark ? "bg-blue-dark text-white" : "bg-gray-light"
            }`}
        >
            <div className="container pb-20 pt-10">
                <Link to="/">
                    <Button.Primary className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back
                    </Button.Primary>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    {country !== null ? (
                        <img
                            src={country?.flag}
                            className={`w-full ${!isDark && "border-2"}`}
                            alt={`${country?.name} Flag`}
                        />
                    ) : (
                        <div className="w-full animate-pulse bg-blue h-96"></div>
                    )}
                    <div>
                        {country !== null ? (
                            <div>
                                <h1 className="font-bold text-2xl mb-4">
                                    {country?.name}
                                </h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <ul>
                                        <li>
                                            <strong>Native Name: </strong>
                                            {country?.nativeName}
                                        </li>
                                        <li>
                                            <strong>Population: </strong>
                                            {new Intl.NumberFormat().format(
                                                country?.population
                                            )}
                                        </li>
                                        <li>
                                            <strong>Region: </strong>
                                            {country?.region}
                                        </li>
                                        <li>
                                            <strong>Sub Region: </strong>
                                            {country?.subregion}
                                        </li>
                                        <li>
                                            <strong>Capital: </strong>
                                            {country?.capital}
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <strong>Top Level Domain :</strong>{" "}
                                            {country?.topLevelDomain}
                                        </li>
                                        <li>
                                            <strong>Currencies :</strong>{" "}
                                            {country?.currencies[0].name}
                                        </li>
                                        <li>
                                            <strong>Languages :</strong>{" "}
                                            {country?.languages.map(
                                                (el, idx) => {
                                                    if (
                                                        country?.languages
                                                            .length -
                                                            1 !==
                                                        idx
                                                    ) {
                                                        return `${el.name}, `;
                                                    } else {
                                                        return el.name;
                                                    }
                                                }
                                            )}
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20 grid grid-cols-1 md:grid-cols-6">
                                    <h6 className="font-bold text-base col-span-0 md:col-span-2">
                                        Border Countries:
                                    </h6>
                                    <div className="col-span-0 md:col-span-4">
                                        <div className="flex flex-wrap">
                                            {borderList.length > 0
                                                ? borderList.map((el, idx) => {
                                                      return (
                                                          <div
                                                              key={idx}
                                                              className={`rounded shadow px-4 py-2 mr-4 mb-2 ${
                                                                  isDark &&
                                                                  "bg-blue text-white"
                                                              }`}
                                                          >
                                                              {el}
                                                          </div>
                                                      );
                                                  })
                                                : "N/A"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="animate-pulse">
                                <div className="h-4 bg-blue w-2/5 rounded mb-4"></div>
                                <div className="h-4 bg-blue w-2/3 rounded mb-1"></div>
                                <div className="h-4 bg-blue w-2/4 rounded mb-1"></div>
                                <div className="h-4 bg-blue w-2/5 rounded mb-10"></div>
                                <div className="h-4 bg-blue w-1/2 rounded mb-1"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
