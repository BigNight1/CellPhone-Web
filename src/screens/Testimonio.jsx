import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Testimonio.css';

const testimonios = [
  {
    id: 1,
    imgSrc: 'https://srmahour.github.io/custom-testimonial-slider-and-blog/images/5.jpg',
    author: 'Maecenas varius finibus orci vel',
    quote:
      'Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus',
  },
  {
    id: 2,
    imgSrc: 'https://srmahour.github.io/custom-testimonial-slider-and-blog/images/4.jpg',
    author: 'Maecenas varius finibus orci vel',
    quote:
      'Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus',
  },
  {
    id: 3,
    imgSrc: 'https://srmahour.github.io/custom-testimonial-slider-and-blog/images/3.jpg',
    author: 'Maecenas varius finibus orci vel',
    quote:
      'Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus',
  },
  {
    id: 4,
    imgSrc: 'https://srmahour.github.io/custom-testimonial-slider-and-blog/images/2.jpg',
    author: 'Maecenas varius finibus orci vel',
    quote:
      'Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus',
  },
  {
    id: 5,
    imgSrc: 'https://srmahour.github.io/custom-testimonial-slider-and-blog/images/1.jpg',
    author: 'Maecenas varius finibus orci vel',
    quote:
      'Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus',
  },
];

const Testimonio = () => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="testimonial-area">
      <div className="container">
        <div className="heading">
          <h2>NUESTROS CLIENTES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Slider {...sliderSettings} className="testimonials">
          {testimonios.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className="author-img">
                <img src={testimonial.imgSrc} alt="" className="img-fluid rounded" />
              </div>
              <div className="author-quote">
                <h4>{testimonial.author}</h4>
                <blockquote>
                  <i className="fa fa-quote-left"></i> {testimonial.quote} <i className="fa fa-quote-right"></i>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonio;
