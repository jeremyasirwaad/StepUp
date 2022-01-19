import SimpleImageSlider from "react-simple-image-slider";
import  image1  from "./How-to-Become-a-Full-Stack-Web-Developer-in-2021.png"
import image2 from './How-to-learn-Data-Science-1.jpg'

const images = [
  { url: image1  },
  { url: image2 },
  { url: "./What-is-Data-Visualization-Blog-Header.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

export const  ImageSlider = () => {
  return (
    <div style={{ "marginTop" : "70px" }}>
      <SimpleImageSlider
        width={"100vw"}
        height={"80vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay = {true}
      />
    </div>
  );
}