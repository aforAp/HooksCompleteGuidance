import React,{useState} from 'react'

const GeneralForms = () => {
    const [datas, setDatas] = useState(0);
    function handleDatas(identifiers, values) {
        if(identifiers === 'datas') {
            setDatas(values);
        }
    }
  return (
    <div>
      <input value={datas} onChange={(e) => handleDatas("datas", e.target.value)} />
    </div>
  )
}

export default GeneralForms
