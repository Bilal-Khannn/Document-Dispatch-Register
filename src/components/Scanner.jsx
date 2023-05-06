import React, { useState } from "react";
import Webcam from "react-webcam";

const Scanner = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [cameraOn, setCameraOn] = useState(true);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    setCameraOn(false);
  }, [webcamRef]);

  const reset = () => {
    setImageSrc(null);
    setCameraOn(true);
  };

  return (
    <>
      <h1 className="inline-block text-2xl ml-5 border-b-8 border-emerald-500 rounded-lg">
        Scan Document
      </h1>

      <div className=" flex flex-col items-center justify-center py-10 overflow-auto">
        <div className="">
          {cameraOn && (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-md"
            />
          )}
          {cameraOn && (
            <button
              onClick={capture}
              className="mt-5 bg-emerald-500 text-white py-2 px-6 rounded-md hover:bg-emerald-600 focus:outline-none"
            >
              Scan Document
            </button>
          )}
          {!cameraOn && (
            <button
              onClick={reset}
              className="  bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 focus:outline-none"
            >
              Retake
            </button>
          )}
        </div>
        {imageSrc && (
          <div className="mt-4">
            <img src={imageSrc} alt="Document" className="rounded-md" />
          </div>
        )}
      </div>
    </>
  );
};

export default Scanner;
