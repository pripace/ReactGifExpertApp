import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
        {
            isLoading && <h4>Cargando...</h4> 
        }

            

            <div className="card-grid">
                {
                    images.map(( image ) => (
                        <GifItem 
                        key={ image.id }
                        {...image} //aca saco todas las props y chau, no las saco una por una 
                        />
                    ))
                }
            </div>
        </>
    )
};
