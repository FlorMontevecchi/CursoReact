import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount";
import {ItemList} from "../ItemList";

import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, title:"Helsinsky", price:560, pictureUrl:"https://cdn.pixabay.com/photo/2021/01/06/10/11/burger-5893927_960_720.jpg" },
          { id:2, title:"Nairobi", price:450, pictureUrl:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"},
          { id:3, title:"Berlin", price:320, pictureUrl:"https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg" },
          { id:3, title:"Tokio", price:530, pictureUrl:"https://cdn.pixabay.com/photo/2017/08/02/22/11/burger-2573682_1280.jpg" }
        ])
      },2000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div className="container ">
      
      <ItemList items={items}/>
      <ItemCount stock="6" initial="2" />
    </div>
  );
}