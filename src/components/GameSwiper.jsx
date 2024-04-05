import { useState } from "react"
//Swiper React Components
import { Swiper, SwiperSlide  } from "swiper/react"
//Swiper Styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import GameSlide from "./GameSlide.jsx"
import "./GameSwiper.css"

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules"


export default function GameSwiper({ games }) {
    const [active, setActive] = useState(false)

    const handleToggleVideo = () => {
        setActive(!active)
    }


  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        // loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
            rotate: 35,
            stretch: 200,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="game-swiper"
    >
        {games.map(game=>(
             <SwiperSlide key={game._id} >
               <GameSlide 
               game={game}
               active={active} 
               toggleVideo={handleToggleVideo}/>
               </SwiperSlide>
        ))}
    </Swiper>   


  )
}

