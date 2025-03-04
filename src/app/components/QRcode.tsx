/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import QRCode from 'react-qr-code';

function QRcode() {
    const [url, setUrl] = useState("This is working");
    const [size, setSize] = useState(256);

    return (
        <div className="p-14 flex justify-center gap-8 items-center max-w-4xl bg-purple-100 rounded-2xl">
        <div className="w-[256px] p-2 flex flex-col items-center">
            <div className="w-full">
            <QRCode
                value={url}
            />
            </div>
            <Button className="rounded-2xl shadow bg-purple-500 text-white w-full mt-4">
            Download
            </Button>
        </div>
        <div className="w-full p-2">
            <div className="flex justify-center flex-col items-center">
            <h1 className="text-4xl">QRCode</h1>
            <p className="text-xl">Generator</p>
            </div>
            <div className="mt-5">
            <form>
                <div className="w-full flex flex-col gap-1">
                <label
                    htmlFor="url"
                    className="text-sm text-gray-600 font-semibold ml-2"
                >
                    URL
                </label>
                <Input
                    placeholder="Enter your URL"
                    className="rounded-2xl shadow p-4 bg-white active:ring-1 active:ring-purple-300"
                />
                </div>
                <div className="w-full flex flex-col gap-1 mt-2">
                <label
                    htmlFor="url"
                    className="text-sm text-gray-600 font-semibold ml-2"
                >
                    Image Size
                </label>
                <Input
                    placeholder="Enter Image Size"
                    className="rounded-2xl shadow p-4 bg-white"
                />
                </div>
                <Button className="rounded-2xl shadow bg-purple-500 text-white w-full mt-8">
                Generate
                </Button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default QRcode