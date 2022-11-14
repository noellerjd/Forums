import React from 'react'
import { useState, useRef } from 'react';

const CreatePostForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);
    const textArea = useRef(null);
  
    const handleBodyChange = (event) => {
        setBody(event.target.value);
        submittable(title, event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        submittable(event.target.value, body);
    }

    const submittable = (title, body) => {
        if (title.length === 0) {
            setCanSubmit(false);
            return;
        }

        if (body.length === 0) {
            setCanSubmit(false);
            return;
        }

        setCanSubmit(true);
    }
  
    const updateTextAreaSize = (element, defaultHeight) => {
      if (element) {
        const target = element.target ? element.target : element;
        target.style.height = defaultHeight;
        target.style.height = `${target.scrollHeight}px`;
        console.log(target.style.height);
      }
    };

  return (
    <form
        action=""
        className="flex-col flex gap-y-3 items-center bg-lightblack text-white p-3 rounded-md mb-10"
      >
        <input
          type="text"
          className="outline-none p-2 rounded-lg bg-lightblack w-full text-lg border border-lightestblack focus:border-white transition ease-in-out duration-300 placeholder-lightestblack"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          type="text"
          className="h-[100px] p-2 rounded-lg border-lightestblack border outline-none bg-lightblack w-full text-md resize-none focus:border-white transition ease-in-out duration-300 placeholder-lightestblack"
          placeholder="Text"
          onChange={(event) => {
            handleBodyChange(event);
            updateTextAreaSize(event, "100px");
          }}
          value={body}
          ref={textArea}
        ></textarea>
        <button className={`w-full ${canSubmit ? "bg-lightblue" : "bg-black hover:cursor-not-allowed"} text-xl rounded-md py-2 transition ease-in-out duration-300`} disabled={!canSubmit}>Post!</button>
      </form>
  )
}

export default CreatePostForm;