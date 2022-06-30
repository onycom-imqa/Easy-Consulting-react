import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {useIMQA} from "imqa-react-sdk";

const Spinner = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <Loader
        type="Oval"
        color="#7456F7"
        height={70}
        width={70}
      />
        </div>
    );
};

export default Spinner;
