import React, { useState } from 'react'

const Inserts = () => {
    const datas = {
        id,
        name,
    }
    const names = [{id: 1, name:'Alice'},{id:2,name: 'Bob'},{id:3, name: 'John'}];
    const [part, setPart] = useState(datas);
     const [datas1, setDatas] = useState([]);
     function HandleChanges(event) {
       const {name, value} = event.target;
       setPart({...part, [name]: value});
       setDatas(...datas1, part);
    }
  return (
    <div>
      <label>Enter the index to insert the text</label>
      <input type="text" name="id" onChange={(event) => HandleChanges(event)} />
     <input type="text" name="name" onChange={(event) => HandleChanges(event)} />

    </div>
  )
}

export default Inserts
