import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliderslick=()=> {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3>Slider 1</h3>
          </div>
          <div>
            <h3> Slider 2</h3>
          </div>
          <div>
            <h3>Slider 3</h3>
          </div>
          <div>
            <h3>slider 4</h3>
          </div>
          <div>
            <h3>Slider 5</h3>
          </div>
          <div>
            <h3>Slider 6</h3>
          </div>
          <div>
            <h3>Image 2</h3>
          </div>
          <div>
            <h3>image 1</h3>
          </div>
        </Slider>
      </div>
    );
  }
export default Sliderslick
