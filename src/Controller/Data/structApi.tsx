



 interface CardsApi{
    id:number,
    name:string,
    type:string,
    desc:string,
    atk:number,
    def:number,
    level:number,
    race:string,
    linkval:number,
    archetype:string,
    linkmarkers:[string],
    attribute:string,
    banlist_info: banlist_info,
    card_sets: card_sets[],
    card_images:card_images[],

}


interface banlist_info{
    ban_tcg: string
    ban_ocg: string
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


export type {CardsApi, banlist_info}
