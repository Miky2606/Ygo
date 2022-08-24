 

 
 interface CardStore{
    price:[number],
    condition:[string]
   store:string 
   
   }


   interface CardSet {
    set_name: string,
    set_code: string,
    num_of_cards: number,
    tcg_date: string
   }

   export type {CardSet,CardStore}