import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "/public/logo.jpg";
import image2 from "/public/image2.jpg";
import image3 from "/public/image3.jpg";
import video1 from "/public/shopvideo.mp4"; // Import your video file

const ImageSlider = () => {
  return (
    <div className="w-full">
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        <div className="relative h-[900px]">
          <img src={image1.src} alt="Image 1" className="object-cover h-full w-full" />
          <p className="legend">Image 1</p>
        </div>
        <div className="relative h-[900px]">
          <img src={image2.src} alt="Image 2" className="object-cover h-full w-full" />
          <p className="legend">Image 2</p>
        </div>
        <div className="relative h-[900px]">
          <img src={image3.src} alt="Image 3" className="object-cover h-full w-full" />
          <p className="legend">Image 3</p>
        </div>
        <div className="relative h-[900px]">
          <video className="object-cover h-full w-full" controls>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="legend">Video 1</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
