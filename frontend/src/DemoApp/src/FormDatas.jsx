import {useState} from 'react'

const FormDatas = () => {
    let datas = {
        name: " ",
        email: " "
    }

    async function handleSubmit() {
       const data = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
       })
         const res = await data.json();
         return res;
    };

    const [formData, setFormData] = useState(datas);
  return (
    <div>
      <h1>Full Name</h1>
        <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <h1>Email</h1>
        <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
<button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormDatas
