import React, { useState } from "react";

const ImageGenerator = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = () => {
    const url = `https://picsum.photos/${width}/${height}?random=${Date.now()}`;
    setImageUrl(url);
  };
  return (
    <>
      <div className="container text-center mt-5">
        <h1 className="mb-4 text-primary">📸 Image Generator</h1>

        <div className="row justify-content-center mb-4">
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" onClick={generateImage}>
              Generate
            </button>
          </div>
        </div>

        {imageUrl && (
          <div className="mt-4">
            <img
              src={imageUrl}
              alt="Generated"
              className="img-fluid rounded shadow"
            />
            <p className="mt-3">
              <a href={imageUrl} target="_blank" rel="noreferrer">
                {imageUrl}
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGenerator;
