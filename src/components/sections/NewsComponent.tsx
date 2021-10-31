import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { NewsResponse } from "../../core-utils/interfaces/news/newsResponse.interface";
import { fetchNews, news } from "../../services/news/news.api";
import { NewsList } from "../elements/NewsList";

export const NewsComponent: React.FC = () => {
    const { data, isLoading, isError }: UseQueryResult<NewsResponse> = useQuery(
        "news",
        fetchNews
    );
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="w-8/12 max-w-3xl px-4 mb-6 mt-7 md:mt-8 md:mb-7 md:px-5">
                <div className="font-medium tracking-tight text-46 md:text-80 lg:text-115 text-primary-0 leading-100">
                    News
                </div>
                <div className="mt-4 font-medium text-20 md:text-30 text-primary-100 leading-100">
                    Latest information of everything
                </div>
            </div>
            {!isLoading && data ? (
                <NewsList data={data} />
            ) : (
                isError && <NewsList data={news} />
            )}
        </div>
    );
};
