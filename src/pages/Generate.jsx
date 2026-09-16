import React, { useState } from "react";

const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [imageUrl, setImageUrl] = useState(null);

  const aspectRatios = [
    { label: "16:9", value: "16:9", description: "YouTube Thumbnail" },
    { label: "1:1", value: "1:1", description: "Square" },
    { label: "4:3", value: "4:3", description: "Standard" },
    { label: "9:16", value: "9:16", description: "Shorts / Reels" },
  ];

  const handleGenerate = () => {
    console.log({
      prompt,
      aspectRatio,
    });

    // Later:
    // Call your FastAPI → Gemini API here
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6 md:px-8">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Create Your Thumbnail
        </h1>

        <p className="text-gray-400 mt-2">
          Describe your idea and let AI create a professional thumbnail.
        </p>
      </div>

      {/* Main Generator */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT SIDE */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 md:p-7">

          <h2 className="text-xl font-semibold mb-5">
            Thumbnail Settings
          </h2>

          {/* Prompt */}
          <div className="mb-7">

            <label className="block text-sm font-medium text-gray-300 mb-2">
              Describe your thumbnail
            </label>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: A professional YouTube thumbnail about learning Java DSA, developer sitting at a computer, dramatic lighting, blue and purple background..."
              className="
                w-full
                h-44
                resize-none
                rounded-xl
                bg-gray-950
                border border-gray-700
                p-4
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-blue-500
                transition
              "
            />

            <p className="text-xs text-gray-500 mt-2">
              Be specific about the subject, background, colors and style.
            </p>

          </div>

          {/* Aspect Ratio */}
          <div>

            <label className="block text-sm font-medium text-gray-300 mb-3">
              Image Aspect Ratio
            </label>

            <div className="grid grid-cols-2 gap-3">

              {aspectRatios.map((aspect) => (
                <button
                  key={aspect.value}
                  onClick={() => setAspectRatio(aspect.value)}
                  className={`
                    p-4
                    rounded-xl
                    border
                    text-left
                    transition
                    ${
                      aspectRatio === aspect.value
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-700 bg-gray-950 hover:border-gray-500"
                    }
                  `}
                >

                  <div className="flex items-center justify-between">

                    <span className="font-semibold">
                      {aspect.label}
                    </span>

                    {aspectRatio === aspect.value && (
                      <span className="text-blue-400">
                        ✓
                      </span>
                    )}

                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {aspect.description}
                  </p>

                </button>
              ))}

            </div>

          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim()}
            className="
              w-full
              mt-8
              py-3.5
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              hover:from-blue-600
              hover:to-purple-700
              disabled:opacity-40
              disabled:cursor-not-allowed
              font-semibold
              transition
            "
          >
            ✨ Generate Thumbnail
          </button>

        </div>


        {/* RIGHT SIDE */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 md:p-7">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-xl font-semibold">
                Preview
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {aspectRatio} aspect ratio
              </p>
            </div>

          </div>


          {/* Image Preview */}
          <div className="w-full flex items-center justify-center bg-gray-950 rounded-xl border border-gray-800 overflow-hidden min-h-[400px]">

            {imageUrl ? (

              <img
                src={imageUrl}
                alt="Generated thumbnail"
                className="w-full h-full object-contain"
              />

            ) : (

              <div className="text-center px-6">

                <div className="text-6xl mb-4">
                  🖼️
                </div>

                <h3 className="text-lg font-semibold text-gray-300">
                  Your thumbnail will appear here
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  Enter a prompt and choose an aspect ratio
                  to generate your thumbnail.
                </p>

              </div>

            )}

          </div>


          {/* Selected Aspect */}
          <div className="mt-5 flex items-center justify-between">

            <div>
              <p className="text-xs text-gray-500">
                Selected aspect
              </p>

              <p className="font-medium mt-1">
                {aspectRatio}
              </p>
            </div>

            <div className="flex gap-2">

              <button
                disabled={!imageUrl}
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-gray-700
                  text-sm
                  hover:bg-gray-800
                  disabled:opacity-30
                "
              >
                Download
              </button>

              <button
                disabled={!imageUrl}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-gray-800
                  text-sm
                  hover:bg-gray-700
                  disabled:opacity-30
                "
              >
                Regenerate
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Generate;