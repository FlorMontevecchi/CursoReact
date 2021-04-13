import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount";
import {ItemList} from "../ItemList";

import { useParams } from "react-router-dom";

const products = [
  
  {id: 1, title: "Helsinsky", categoryId: "hamburguesas", description: "descripcion1", price: 560, pictureUrl: "https://cdn.pixabay.com/photo/2021/01/06/10/11/burger-5893927_960_720.jpg"},

  {id: 2, title: "Nairobi", categoryId: "hamburguesas", description: "descripcion2", price: 450, pictureUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"},

  {id: 3, title: "Berlin", categoryId: "hamburguesas", description: "descripcion3", price: 320, pictureUrl: "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg"},

  {id: 4, title: "Tokio", categoryId: "hamburguesas", description: "descripcion4", price: 530, pictureUrl: "https://cdn.pixabay.com/photo/2017/08/02/22/11/burger-2573682_1280.jpg"},

  {id: 5, title: "Denver", categoryId: "empanadas", description: "Jamón y queso", price: 95, pictureUrl:"https://placeralplato.com/files/2018/07/empanadas-de-jamn-y-queso.jpg"},

  {id: 6, title: "Moscú", categoryId: "empanadas", description: "Acelga y queso", price: 80, pictureUrl:"https://i.pinimg.com/originals/fb/20/b9/fb20b90b672846ea83a7cc9735356ab9.jpg"},

  {id: 7, title: "Oslo", categoryId: "empanadas", description: "Carne", price: 115, pictureUrl:"https://fargo-com-ar-assets.s3.amazonaws.com/s3fs-public/hero_receta4_2.png"},

  {id: 8, title: "Rio", categoryId: "empanadas", description: "Humita", price: 85, pictureUrl:"https://d37k6lxrz24y4c.cloudfront.net/v2/es-ar/e9dc924f238fa6cc29465942875fe8f0/89ba56f3-478c-42ce-8da5-97b766fea5e2-600.jpg"}
];


export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{

    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {      
      if (categoryId) {      
      const productsFilter = products.filter((product) => {      
      return product.categoryId === categoryId;      
      });
      
      resolve(productsFilter);      
      } else {      
      resolve(products);
            }
      }, 2000);
      });
      
      prom.then((resultado) => {      
      setItems(resultado);      
      });      
      }, [categoryId]);
      

  return (
    <div className="container ">
      {categoryId}
      <ItemList items={items}/>
     
    </div>
  );
}