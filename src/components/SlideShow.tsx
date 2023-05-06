import Carousel from "nuka-carousel"
import { Box } from '@chakra-ui/react'
import { Portfolio, useCards } from "./useCards";

const SlideShow = () => {
  const {data, isLoading, error} = useCards()
  return (
    <Box display={"flex"} minWidth={100} maxWidth={"62vh"}>
  <Carousel wrapAround={true} speed={3000} animation="fade" pauseOnHover={true} autoplay={true} autoplayInterval={5000}>
  {data.map((portfolio) => (
        <img height={"100vh"} key={portfolio.id} src={portfolio.image_background}></img>
    ))}
   </Carousel>
    </Box>
 
  )
}

export default SlideShow