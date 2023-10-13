import React from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider>
      <div>
        <img src="https://9to5google.com/wp-content/uploads/sites/4/2023/04/Google-Authenticator-sync-new-icon.jpg?quality=82&strip=all" alt="Image 1" />
      </div>
      <div>
        <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/l/o/login_page_icon_with_mobile_and_details_Slide01.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/e/2/e2ebbf6154aa25b369eb15777e1689d9c730df3e3d86e48a58ba17ee366cbff7/dark-web-slide2.png" alt="Image 3" />
      </div>
      
    </Slider>
  );
};

export default Slider;
