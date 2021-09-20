import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppsContext } from "../App";
import Card from "../components/Card";
import CardSkeleton from "../components/skeleton/CardSkeleton";

function Home() {
    const { isDark } = useContext(AppsContext);
    const [countryList, setCountryList] = useState(null);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then((data) => data.json())
            .then((data) => setCountryList(data))
            .catch((err) => alert(err));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (keyword === "") {
            getAllData();
        } else {
            fetch(`https://restcountries.eu/rest/v2/name/${keyword}`)
                .then((data) => data.json())
                .then((data) => {
                    data.status !== 404
                        ? setCountryList(data)
                        : setCountryList([]);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleFilter = (e) => {
        const filter = e.target.value;
        setCountryList(null);
        fetch(`https://restcountries.eu/rest/v2/region/${filter}`)
            .then((data) => data.json())
            .then((data) => setCountryList(data))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div
                className={`${
                    isDark ? "bg-blue-dark text-white" : "bg-gray-light"
                } min-h-screen`}
            >
                <div className="container pt-10">
                    <div className="flex flex-col md:flex-row justify-between">
                        <form onSubmit={handleSearch}>
                            <div
                                className={`relative ${
                                    isDark
                                        ? "text-blue-dark"
                                        : "text-gray-600 focus-within:text-gray-400"
                                }`}
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button
                                        type="submit"
                                        className={`md:pl-5 pl-2 focus:outline-none focus:shadow-outline ${
                                            isDark
                                                ? "text-white"
                                                : "text-blue-dark"
                                        }`}
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
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                                <input
                                    type="text"
                                    className={`py-3 pl-11 md:pl-16 md:w-96 w-full rounded shadow text-sm font-light focus:outline-none ${
                                        isDark && "bg-blue text-white"
                                    }`}
                                    placeholder="Search for a country..."
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>
                        </form>
                        <div className="mt-5 md:mt-0">
                            <select
                                defaultValue="none"
                                onChange={handleFilter}
                                className={`md:px-7 px-4 py-3 rounded shadow text-sm font-semibold focus:outline-none ${
                                    isDark ? "bg-blue text-white" : "bg-white"
                                }`}
                            >
                                <option
                                    value="none"
                                    className="font-semibold"
                                    disabled
                                >
                                    Filter by region
                                </option>
                                <option
                                    value="Africa"
                                    className="font-semibold"
                                >
                                    Africa
                                </option>
                                <option
                                    value="Americas"
                                    className="font-semibold"
                                >
                                    America
                                </option>
                                <option value="Asia" className="font-semibold">
                                    Asia
                                </option>
                                <option
                                    value="Europe"
                                    className="font-semibold"
                                >
                                    Europe
                                </option>
                                <option
                                    value="Oceania"
                                    className="font-semibold"
                                >
                                    Oceania
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        {countryList == null ? (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-5">
                                <CardSkeleton />
                                <CardSkeleton />
                                <CardSkeleton />
                                <CardSkeleton />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-5">
                                {countryList.map((el, idx) => {
                                    return (
                                        <Link
                                            key={idx}
                                            to={`/detail/${el.alpha2Code}`}
                                        >
                                            <Card
                                                key={idx}
                                                img={el.flag}
                                                title={el.name}
                                                population={el.population}
                                                region={el.region}
                                                capital={el.capital}
                                            />
                                        </Link>
                                    );
                                })}
                                {countryList.length <= 0 && (
                                    <div className="md:col-span-4 w-full text-center mt-10">
                                        <p className="font-semibold font-xl">
                                            Negara tidak ditemukan!
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
