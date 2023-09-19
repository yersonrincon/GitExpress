import {useFetchGifs} from'../hooks/useFetchGifs.js';
import { GifItem } from './GifItem.jsx';
export const GifGrid = ({ category }) => {



const {images,isLoading} =useFetchGifs(category);
console.log(images,isLoading);



  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>cargando...</h2>)
        
      }
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              /*  key={image.id}
                image={image}
                title={image.title}
                url={image.url} */
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
