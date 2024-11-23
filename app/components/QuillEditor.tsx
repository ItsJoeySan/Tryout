"use client";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";

const options = {
  theme: "snow",
};

const QuillEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, options); // Use the ref directly instead of the id
      console.log("Quill initialized:", quill);
    }
  }, []);

  return (
    <div
      ref={editorRef} // Attach the ref here
      className="bg-gray-500 min-w-full"
    ></div>
  );
};

export default QuillEditor;
