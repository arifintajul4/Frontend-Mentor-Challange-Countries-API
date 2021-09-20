import React from "react";

export default function CardSkeleton() {
    return (
        <div class="rounded shadow overflow-hidden">
            <div class="animate-pulse">
                <div class=" bg-blue-dark h-44 w-full"></div>
                <div className="px-4 pt-6 pb-10">
                    <div class="h-4 bg-blue-dark rounded w-3/4 mb-4"></div>
                    <div class="h-4 bg-blue-dark rounded mb-2"></div>
                    <div class="h-4 bg-blue-dark rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
}
