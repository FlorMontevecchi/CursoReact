import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail';
import { useParams } from "react-router-dom";


const getItems = () => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"Descuento delicioso",
            price: 70,
            description: "Para cada segunda unidad!",
            img:""

        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId, otroId} = useParams()

    useEffect(() => {
        getItems(itemId).then((res)=> setItem(res))
        return;
    }, [itemId])

   
     return <> {itemId} - {otroId}
     <ItemDetail item={item} /></>
    }