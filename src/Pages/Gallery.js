import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";
import panorama_1 from "../pictures/panorama_1.JPG";
import pic_1 from "../pictures/pic_1.JPG";
import pic_2 from "../pictures/pic_2.JPG";
import pic_3 from "../pictures/pic_3.JPG";
import pic_4 from "../pictures/pic_4.JPG";
import pic_5 from "../pictures/pic_5.JPG";
import pic_6 from "../pictures/pic_6.JPG";
import pic_7 from "../pictures/pic_7.JPG";
import pic_8 from "../pictures/pic_8.JPG";
import pic_9 from "../pictures/pic_9.JPG";
import pic_10 from "../pictures/pic_10.JPG";
import pic_11 from "../pictures/pic_11.JPG";
import pic_12 from "../pictures/pic_12.JPG";
import pic_13 from "../pictures/pic_13.jpg";
import pic_14 from "../pictures/pic_14.jpg";

function GalleryPage() {
  const IMAGES = [
    {
      src: pic_1,
      thumbnail: pic_1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_2,
      thumbnail: pic_2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_3,
      thumbnail: pic_3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_4,
      thumbnail: pic_4,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_5,
      thumbnail: pic_5,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_6,
      thumbnail: pic_6,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_7,
      thumbnail: pic_7,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_8,
      thumbnail: pic_8,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_9,
      thumbnail: pic_9,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: pic_10,
      thumbnail: pic_10,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_11,
      thumbnail: pic_11,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_12,
      thumbnail: pic_12,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_13,
      thumbnail: pic_13,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: pic_14,
      thumbnail: pic_14,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ];

  return (
    <div className="m-4 p-4 rounded home">
      <div className="d-flex flex-column justify-content-center">
        <h1 className="mb-5 text-center">Галерия</h1>
        <Gallery images={IMAGES} />
        <h1 className="mb-5 text-center mt-5">Видео</h1>
        <div className="d-flex justify-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1YNBOtQk6B0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
