import axios from "axios";
import { useState } from "react";

export default function Home() {
  const exampleText = `Hi, My name is piyush mahajan I am a full stack web developer. I build this app for summarizing the text in a very human manner. i Used api for it and NEXT.js as a framework to build it.

  Hope you like it!!!
  you can enter your text here and then press on Submit Button. So, here you have it Your "Summarized text".`;

  const [text, setText] = useState(exampleText);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const getResponse = async () => {
    try {
      setLoading(true);
      const res = await axios.post("api/summarize/", {
        text,
      });
      // misunderstanding is what is summery is?

      setResponse(res.data.summary);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
        Text <span className="text-active">Summarizer</span>
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6">
        Summarise your text into a shorter length.
      </h2>
      <form
        className="flex md:flex-row flex-col justify-between mt-20 w-full"
        onSubmit={(e) => {
          getResponse();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="md:w-2/5 w-full">
          <label htmlFor="text" className=" text-sm font-medium text-primary">
            Enter your text
          </label>
          <div className="border-4 border-[#7B8FA1] mt-2">
            <textarea
              rows={14}
              name="text"
              id="text"
              className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
              defaultValue={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0 mt-4">
          {/* <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button> */}
          <button
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#CFB997] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="submit"
          >
            {loading ? (
              <span className="animate-pulse">Loading..</span>
            ) : (
              <>Summarize</>
            )}
          </button>
        </div>
        <div className="md:w-2/5 md:mt-0 mt-4 w-full">
          <label
            htmlFor="summary"
            className=" text-sm font-medium text-primary"
          >
            Summarized text
          </label>
          <div className="border-4 text-[#CFB997] border-[#7B8FA1] mt-2">
            <textarea
              readOnly
              type="text"
              rows={14}
              name="summary"
              id="summary"
              className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
              value={response}
            />
          </div>
        </div>
      </form>

      <div className="text-bold mt-20 opacity-70 text-center">
        {/* <p className=""> */}

        <a
          className="text-primary text-xs hover:text-active"
          href="https://piyush-mahajan.netlify.app"
        >
          {" "}
          Made by Piyush Mahajan{" "}
        </a>
        {/* </p> */}
      </div>
    </div>
  );
}
