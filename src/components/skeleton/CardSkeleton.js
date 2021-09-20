import React from "react";

export default function CardSkeleton() {
    return (
        <div className="rounded shadow overflow-hidden">
            <div className="animate-pulse">
                <div className=" bg-blue h-44 w-full"></div>
                <div className="px-4 pt-6 pb-10">
                    <div className="h-4 bg-blue rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-blue rounded mb-2"></div>
                    <div className="h-4 bg-blue rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
}
