import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Portfolio } from './useCards'

interface Props{
    portfolio: Portfolio
}
const PortfolioCard = ({portfolio}: Props) => {
  return (
    <Card maxW='sm' maxH='sm' borderRadius={10} overflow="hidden">
      <Image height={250} objectFit='cover' src={`/${portfolio.image_background}`}></Image>
      <CardBody>
      <HStack justifyContent={'space-between'} marginBottom={3}>
        </HStack>
        <Heading size='md'>{portfolio.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default PortfolioCard