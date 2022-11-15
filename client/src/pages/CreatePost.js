import { useState, useRef } from "react";

const CreatePost = () => {
  const [body, setBody] = useState("");
  const textArea = useRef(null);

  const handleBodyChange = (event) => {
    setBody(event.target.value);
    console.log(JSON.stringify(body));
  };

  const updateTextAreaSize = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
      console.log(target.style.height);
    }
  };

  return (
    <div className="w-[min(calc(100vw-10%),1000px)] mx-auto">
      <h1 className="text-2xl text-center text-white mb-10">Create a Post</h1>
      <form
        action=""
        className="flex-col flex gap-y-3 items-center bg-lightblack text-white p-3 rounded-md"
      >
        <input
          type="text"
          className="outline-none p-2 rounded-lg bg-lightblack w-full text-lg border border-lightestblack focus:border-white transition ease-in-out duration-300 placeholder-lightestblack"
          placeholder="Title"
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
      </form>
    </div>
  );
};
export default CreatePost;
