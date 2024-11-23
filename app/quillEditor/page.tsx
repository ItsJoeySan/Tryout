"use client";
// import QuillEditor from "../components/QuillEditor";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("../components/QuillEditor"), {
  ssr: false,
});

const editor = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {/* <QuillEditor /> */}
      <ReactQuill />
    </div>
  );
};

export default editor;
