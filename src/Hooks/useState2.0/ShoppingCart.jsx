import React, { useState } from 'react'
import AddNewItem from './AddNewItem.jsx';
const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];


const ShoppingCart = () => {
    const [data, setData] = useState(initialProducts);
    const [removed, setRemovedCount] = useState(0);
    function UpdateProducts(Products) {
        const updatedList = [...initialProducts, Products];
        setData(updatedList);
    }


    function IncreaseCount(id) {
        const updatedData = data.map((datas) => {
            return(
datas.id === id ? {...datas, count: datas.count =Number(datas.count)+  1} :  datas
       ) });
        console.log(updatedData);
        setData(updatedData);
    }


    function RemoveProducts(id) {
        const RemovedProduct = data.filter((data) => Number(data.id) !== Number(id));
        setData(RemovedProduct);
        setRemovedCount(prev => prev + 1);
    }
  return (
    <div>
      <h1>Listed Datas</h1>
      {data.map((data, id) => (
       <div key={id}>
        <h1>{data.name}</h1>
        <button onClick={() => IncreaseCount(data.id)}>+</button>
        <p>{data.count}</p>
        <button onClick={() => RemoveProducts(data.id)}>Remove</button>
        </div>
      ))}
      <AddNewItem onAdd={UpdateProducts} />
      <p>The total removed products are {removed}</p>
    </div>
  )
}

export default ShoppingCart
