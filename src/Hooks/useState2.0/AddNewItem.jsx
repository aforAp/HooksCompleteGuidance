import React, {useState} from 'react'

const AddNewItem = ({onAdd}) => {

    const listData = {
        name: '',
        count: '',
    };

    const [datas, setDatas] = useState(listData);

    function ValuesUpdate(event) {
        const {name, value} = event.target;
        setDatas({
            id: Math.floor((Math.random() * 10) + 1),
            ...datas,
            [name]: value
        });
    }

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" name="name" value={datas.name} onChange={(event) => ValuesUpdate(event)} />
         <label>Count</label>
          <input type="text" name="count" value={datas.count} onChange={(event) => ValuesUpdate(event)} />
        </form>
        <button onClick={() => onAdd(datas)}>update</button>
    </div>
  )
}

export default AddNewItem
