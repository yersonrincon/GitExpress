import {useState,useEffect} from 'react';
import { getGits } from '../helpers/getGifs';

// un hooks es una funcion que regresa algo  arreglo objeto 

  export const useFetchGifs = (category) => {
      // useEffect  es un hook de react que sirbe para disparar efectos secundarios;
  const [images, setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const getImages = async () => {

    const newImages = await getGits(category);
    setImages(newImages);
    setIsLoading(false);
    console.log(newImages);

  }
  useEffect(() => {
    getGits(category);
    getImages();
  }, []
  )
  return {
    images,
    //images: [images],
    isLoading
    //isLoading:true
  }
}
