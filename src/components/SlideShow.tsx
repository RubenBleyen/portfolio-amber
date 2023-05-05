import Carousel from "nuka-carousel"
import { Box } from '@chakra-ui/react'
import { Portfolio, useCards } from "./useCards";

const SlideShow = () => {
  const {data, isLoading, error} = useCards()
  return (
    <Box display="relative" boxSize={600}>
  <Carousel wrapAround={true} speed={3000} animation="fade" pauseOnHover={true} autoplay={true} autoplayInterval={5000}>
  {data.map((portfolio) => (
        <img key={portfolio.id} src={portfolio.image_background}></img>
    ))}
   </Carousel>
    </Box>
 
  )
}

export default SlideShow