import {Text, SimpleGrid, Heading} from '@chakra-ui/react'
import PortfolioCard from './PortfolioCard'
import { useCards } from './useCards'

const PortfolioGrid = () => {
    const {data, isLoading, error} = useCards()
  return (
    <>
    {error && <Text>{error}</Text>}
    <Heading size={'3xl'} marginBottom={5}>Portfolio</Heading>
    <SimpleGrid spacing={4}
      templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
      >
    {data.map((portfolio) => (
        <PortfolioCard key={portfolio.id} portfolio={portfolio}></PortfolioCard>
    ))}
    </SimpleGrid>
    </>
  )
}

export default PortfolioGrid
