"use client";

import { Circles } from 'react-loader-spinner';

const Loading: React.FC = () => {
    return (
            <Circles
                height="40"
                width="40"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
    );
};

export default Loading;
