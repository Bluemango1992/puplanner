'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NotFound: React.FC = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-[90vh] bg-green-50">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-lg text-gray-600 mb-5">Oops! Looks like you took a wrong turn on your walk.</p>
                <button
                    onClick={() => router.push('/dashboard')}
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                >
                    Lead Me Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;