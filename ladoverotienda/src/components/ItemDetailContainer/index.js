import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'


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
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])

   
     return <ItemDetail item={item} />
    }