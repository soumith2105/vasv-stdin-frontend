import React from "react";
import Navbar from "../components/sections/Navbar";
import { NewsComponent } from "../components/sections/NewsComponent";

const News: React.FC = () => {
    return (
        <div className="text-gray-200 bg-gray-800">
            <Navbar />
            <NewsComponent />
        </div>
    );
};

export default News;
