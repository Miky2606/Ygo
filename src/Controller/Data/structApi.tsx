import { type } from "@testing-library/user-event/dist/type";


interface CardsApi{
  data:data
}

interface data{
    id:number,
    name:string,
    type:string,
    desc:string,
    atk:number,
    def:number,
    level:number,
    race:string,
    attribute:string,
    card_sets: card_sets[],
    card_images:card_images[],

}



interface card_sets{
    set_name:string,
    set_code:string,
    set_rarity:string,
    set_rarity_code:string
}

interface card_images{
    image_url:string,
    image_url_small:string
}

export type {CardsApi}