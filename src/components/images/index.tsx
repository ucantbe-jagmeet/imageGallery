import { useEffect, useState } from "react";
import useImageStore from "../../app/imageStore";
import { getRandomPhotos } from "../../utils";
import ImagesCol from "./ImagesCol";

const Images = () => {
  // const [darkTheme, setdarkTheme] = useState("");
  // const handleBtn = () => {
  //   setdarkTheme(!darkTheme);
  // };

  const { addImages, images } = useImageStore((state) => ({
    images: state.images,
    addImages: state.addImages,
  }));

  useEffect(() => {
    getRandomPhotos().then((images) => {
      console.log("images", images);

      addImages(images);
    });
  }, []);

  return (
    <div
      className="p-5 md:py-10 md:px-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 bg-black text-white"

      // {
      //   !darkTheme
      //     ? "p-5 md:py-10 md:px-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 bg-black text-white"
      //     : "p-5 md:py-10 md:px-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 bg-black text-white"
      // }
    >
      {images.map((imagesCol, index) => {
        return <ImagesCol key={index} images={imagesCol} />;
      })}
    </div>
  );
};

export default Images;
