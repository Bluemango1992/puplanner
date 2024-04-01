"use client";


type LoadingProps = {   
    classes?: string;
};

export default function Loading({ classes }: LoadingProps) {
    return (
        <div className={`animate-pulse ${classes} bg-gray-300 rounded`}></div>
    );
};
