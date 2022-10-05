import React from "react";
import './index.scss'
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/scss";
// import "swiper/scss/effect-coverflow";
// import "swiper/scss/pagination";

// import SwiperCore, {
//     EffectCoverflow,
//     Pagination,
//     Navigation
// } from "swiper/core";

// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


// export default function Slider() {
//     return (
//         <div className="slider_container">
//             <Swiper
//                 navigation={true}
//                 centeredSlides={true}
//                 pagination={{ clickable: true }}
//                 effect="coverflow"
//                 loop={true}
//                 coverflowEffect={{
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: true
//                 }}
//                 slidesPerView={3}
//                 className='my_swiper'
//             >
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-1.jpg)"
//                     }}
//                 >
//                     Slide 1
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-2.jpg)"
//                     }}
//                 >
//                     Slide 2
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-3.jpg)"
//                     }}
//                 >
//                     Slide 3
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-4.jpg)"
//                     }}
//                 >
//                     Slide 4
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-5.jpg)"
//                     }}
//                 >
//                     Slide 5
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-6.jpg)"
//                     }}
//                 >
//                     Slide 6
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-7.jpg)"
//                     }}
//                 >
//                     Slide 7
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-8.jpg)"
//                     }}
//                 >
//                     Slide 8
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-9.jpg)"
//                     }}
//                 >
//                     Slide 9
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage:
//                             "url(https://swiperjs.com/demos/images/nature-10.jpg)"
//                     }}
//                 >
//                     Slide 10
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// }