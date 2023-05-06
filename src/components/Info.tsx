import { HStack, Image } from '@chakra-ui/react'
import { Portfolio } from './useCards';

interface Props {
    portfolio: Portfolio;
  }
const Info = ({portfolio}: Props) => {
  return (
    <div>
    <Image objectFit="cover" height={"60vh"} src={`/${portfolio.image_background}`}>
    </Image>
    <p>{portfolio.titel}</p>
    </div>

  )
}

export default Info