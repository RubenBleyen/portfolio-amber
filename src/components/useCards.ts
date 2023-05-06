import cards from "../assets/data/cards"

export interface Portfolio{
    id: number
    name: string
    image_background: string
    titel: string
    info: string
}

export
 const useCards = () => ({data: cards, isLoading: false, error: null})