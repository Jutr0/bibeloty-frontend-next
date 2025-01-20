'use client'
import {Carousel} from "react-responsive-carousel";

const ImageCarousel = ({images}) => {
    return <Carousel autoPlay={false} showThumbs={false} emulateTouch showStatus={false}>
        {images.map(image => <div key={image.url}>
            <img src={image.url}/>
        </div>)}
    </Carousel>
}

export default ImageCarousel;