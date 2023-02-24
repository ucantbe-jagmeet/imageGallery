import { useEffect } from "react";
import useImageStore from "../../app/imageStore";
import { getRandomPhotos } from "../../utils";
import ImagesCol from "./ImagesCol";

const Images = () => {
  const { addImages, images } = useImageStore((state) => ({
    images: state.images,
    addImages: state.addImages,
  }));

  useEffect(() => {
    getRandomPhotos().then((images) => {
      addImages(images);
    });
  }, []);
  return (
    <div className="p-5 md:py-10 md:px-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((imagesCol, index) => {
        return <ImagesCol key={index} images={imagesCol} />;
      })}
    </div>
  );
};

export default Images;
