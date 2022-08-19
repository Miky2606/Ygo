

 interface cardsArray {
    widget:widget
}

interface widget{
    debug:string,
    window: window,
    image:image,
    text:text
}


interface window{
    title:string,
    name:string,
    width:number,
    height:number
}


interface image{
    src:string,
    name:string,
    hOffset:number,
    vOffset:number,
    alignment:string
}

interface text{
    data: string,
    size: number,
    style: string
    name:string
    hOffset: number,
    vOffset: number,
    alignment:string,
    onMouseUp: string
}




const repetaData =  (datos:cardsArray) => {
    const newArray = []
    for (let index = 0; index < 8; index++) {
      newArray.push(datos)
        
    }

    return newArray

}

export { repetaData }
export type { cardsArray }
