"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { toPng } from 'html-to-image';
import React, { useCallback, useRef, useState } from 'react'
import QRCode from 'react-qr-code';

function QRcode() {
  const [url, setUrl] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');
  const qrCodeImageRef = useRef(null);

    const handleInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setUrl(e.target.value);
    }

    const handleGenerateQrCode = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setQrCodeValue(url);
   
    }

  const handleImageDownload = useCallback(() => {
    if (qrCodeImageRef.current === null) {
      return;
    }

    toPng(qrCodeImageRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'qrcode.png'
        link.href = dataUrl
        link.click()
      })
      .catch((error) => {
        console.log(error)
      })

  }, [qrCodeImageRef]);

    return (
      <div className="p-14 flex justify-center gap-8 items-center max-w-4xl bg-purple-100 rounded-2xl">
        <div className="w-[256px] p-2 flex flex-col items-center">
          <div className="w-full">
            <QRCode value={qrCodeValue} ref={qrCodeImageRef} />
          </div>
          <Button className="rounded-2xl shadow bg-purple-500 text-white w-full mt-4" onClick={handleImageDownload}>
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
                  value={url}
                  onChange={handleInput}
                />
              </div>
              <Button className="rounded-2xl shadow bg-purple-500 text-white w-full mt-8" onClick={handleGenerateQrCode}>
                Generate
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default QRcode