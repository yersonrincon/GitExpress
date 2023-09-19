 export const getGits = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nNdKRN7kSflfxzndlz9bgVesfNgDcFeC&q=${category}&limit=10`;
    //const key= 'nNdKRN7kSflfxzndlz9bgVesfNgDcFeC'
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => 
         ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
        )
    )
    console.log('valor de la funcion',gifs)
   // retorna un objeto
    return gifs;
    
}