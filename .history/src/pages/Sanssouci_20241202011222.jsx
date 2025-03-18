import React from "react";

const Sanssouci = () => {
  return (
    <div>
      <div>
        <div className='sketchfab-embed-wrapper'>
          <iframe
            title='Park 3D Model'
            frameborder='0'
            allowfullscreen
            mozallowfullscreen='true'
            webkitallowfullscreen='true'
            allow='autoplay; fullscreen; xr-spatial-tracking'
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src='https://sketchfab.com/models/179b80fe07c34ce2b4cb0c40b6c46cca/embed'
          >
            {" "}
          </iframe>{" "}
            {" "}
            <a
              href='https://sketchfab.com/3d-models/park-3d-model-179b80fe07c34ce2b4cb0c40b6c46cca?utm_medium=embed&utm_campaign=share-popup&utm_content=179b80fe07c34ce2b4cb0c40b6c46cca'
              target='_blank'
              rel='nofollow'
              style='font-weight: bold; color: #1CAAD9;'
            >
              {" "}
              Park 3D Model{" "}
            </a>{" "}
            by{" "}
            <a
              href='https://sketchfab.com/Nicholas01?utm_medium=embed&utm_campaign=share-popup&utm_content=179b80fe07c34ce2b4cb0c40b6c46cca'
              target='_blank'
              rel='nofollow'
              style='font-weight: bold; color: #1CAAD9;'
            >
              {" "}
              Nicholas-3D{" "}
            </a>{" "}
            on{" "}
            <a
              href='https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=179b80fe07c34ce2b4cb0c40b6c46cca'
              target='_blank'
              rel='nofollow'
              style='font-weight: bold; color: #1CAAD9;'
            >
              Sketchfab
            </a>
          </p>
        </div>
      </div>
      <nav>
        <button>2024</button>
        <button>2030</button>
        <button>2050</button>
        <button>2080</button>
      </nav>
    </div>
  );
};

export default Sanssouci;
