import _ from "lodash";
import moment from "moment/moment";
import React from "react";
import { NewsResponse } from "../../core-utils/interfaces/news/newsResponse.interface";
import { News } from "../../core-utils/interfaces/news/news.interface";

interface NewsListElementProps {
    item: News;
}

export const NewsListItem: React.FC<NewsListElementProps> = ({ item }) => {
    return (
        <tr className="col-span-10 p-4 transition duration-200 ease-in-out border-t border-b border-l md:p-5 border-primary-700 hover:bg-accent-primary group">
            <td className="flex flex-row justify-between">
                <div className="w-8/12">
                    <h4 className="mb-2 font-medium transition duration-200 ease-in-out text-14 md:text-16 text-primary-0 group-hover:text-primary-900">
                        {item.index}
                    </h4>
                    <h5 className="transition duration-200 ease-in-out text-16 md:text-18 text-primary-200 group-hover:text-primary-800">
                        {item.content}
                    </h5>
                    <div className="flex flex-row flex-wrap my-3">
                        {item.categories.map((each) => (
                            <h5
                                key={each}
                                className="my-1 mr-3 font-medium transition duration-200 ease-in-out text-12 md:text-14 text-primary-300 group-hover:text-primary-800"
                            >
                                {each}
                            </h5>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                    <button className="px-3 py-3 m-2 transition duration-200 ease-in-out rounded-full md:m-1 hover:bg-accent-dark">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="w-full fill-current text-primary-0"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.25 7C9.66421 7 10 7.33579 10 7.75C10 8.12656 9.72249 8.4383 9.36083 8.49187L9.25 8.5H7C5.067 8.5 3.5 10.067 3.5 12C3.5 13.864 4.95707 15.3876 6.79435 15.4941L7 15.5H9.25C9.66421 15.5 10 15.8358 10 16.25C10 16.6266 9.72249 16.9383 9.36083 16.9919L9.25 17H7C4.23858 17 2 14.7614 2 12C2 9.32226 4.10496 7.13615 6.75045 7.00612L7 7H9.25ZM17 7C19.7614 7 22 9.23858 22 12C22 14.6777 19.895 16.8638 17.2495 16.9939L17 17H14.75C14.3358 17 14 16.6642 14 16.25C14 15.8734 14.2775 15.5617 14.6392 15.5081L14.75 15.5H17C18.933 15.5 20.5 13.933 20.5 12C20.5 10.136 19.0429 8.6124 17.2057 8.50594L17 8.5H14.75C14.3358 8.5 14 8.16421 14 7.75C14 7.37344 14.2775 7.0617 14.6392 7.00813L14.75 7H17ZM7 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.3797 17.4678 12.6935 17.1018 12.7432L17 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.6203 6.53215 11.3065 6.89823 11.2568L7 11.25H17H7Z" />
                        </svg>
                    </button>
                    <button className="px-3 py-3 m-2 transition duration-200 ease-in-out rounded-full md:m-1 hover:bg-accent-dark">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="w-full fill-current text-primary-0"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8.64275 8.20797L11.3263 2.75967C11.6012 2.20153 12.397 2.20153 12.6719 2.75967L15.3555 8.20797L21.3664 9.07657C21.982 9.16552 22.228 9.92197 21.7825 10.356L17.435 14.5922L18.4613 20.5779C18.5664 21.1908 17.9228 21.6581 17.3726 21.3682L11.9991 18.5378L6.62564 21.3682C6.07517 21.6582 5.43135 21.1904 5.53701 20.5773L6.5684 14.5922L2.21602 10.3563C1.77015 9.9224 2.01606 9.16555 2.63184 9.07657L8.64275 8.20797ZM11.9991 4.78844L9.81382 9.22516C9.70456 9.44698 9.49299 9.60069 9.24827 9.63605L4.3534 10.3434L7.89768 13.7927C8.07488 13.9652 8.15569 14.2139 8.1137 14.4576L7.27381 19.3315L11.6496 17.0266C11.8684 16.9113 12.1299 16.9113 12.3486 17.0266L16.7258 19.3322L15.8899 14.457C15.8482 14.2136 15.9289 13.9653 16.1057 13.7931L19.646 10.3435L14.75 9.63605C14.5052 9.60069 14.2937 9.44698 14.1844 9.22516L11.9991 4.78844Z" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

interface NewsListProps {
    data: NewsResponse;
}

function curateData(data: NewsResponse) {
    // group by dates
    const groupedData: { [key: string]: News[] } = _.groupBy(
        data.results,
        "published_date"
    );

    // group by months
    const dates = _.groupBy(Object.keys(groupedData), (obj) => {
        if (moment().diff(moment(obj), "days") < 1) {
            return "Today";
        }
        return moment(obj).format("MMMM, YYYY");
    });
    const extract: { [month: string]: { [key: string]: News[] } } = {};
    Object.entries(dates).map(([key, value]) => {
        const objs: { [key: string]: News[] } = {};
        value.map((date) => {
            objs[date] = groupedData[date];
        });
        extract[key] = objs;
    });
    return extract;
}

export const NewsList: React.FC<NewsListProps> = ({ data }) => {
    const extract = curateData(data);
    return (
        <div>
            <table className="relative">
                <tbody className="grid grid-cols-12">
                    {Object.entries(extract).map(
                        ([month, monthWiseData], index) => {
                            return (
                                <>
                                    <tr
                                        key={index}
                                        className="flex justify-center col-span-12 py-5 text-30 text-primary-0"
                                    >
                                        <td className="py-2">{month}</td>
                                    </tr>
                                    {Object.entries(monthWiseData).map(
                                        ([key, value]) => {
                                            const obj_len = value.length;
                                            return (
                                                <>
                                                    <tr
                                                        className="flex justify-center col-span-2 pt-4 font-medium border-t border-b border-r md:pt-5 border-primary-700 text-12 md:text-16 text-primary-0"
                                                        style={{
                                                            gridRow: `span ${obj_len} / span ${obj_len}`,
                                                        }}
                                                    >
                                                        <td className="pt-2">
                                                            {moment(key).format(
                                                                "ddd, DD"
                                                            )}
                                                        </td>
                                                    </tr>
                                                    {value.map((ele) => (
                                                        <NewsListItem
                                                            item={ele}
                                                            key={ele.id}
                                                        />
                                                    ))}
                                                </>
                                            );
                                        }
                                    )}
                                </>
                            );
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
};
