import React, {useState, useEffect} from 'react'

const FetchData = () => {
    const [data, setData] = useState(""); 
     const [allData, setAllData] = useState([]);
    const [shortListed, setShortListed] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const datas = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
            const json = await datas.json();
            setAllData(json);
        
       setShortListed(json.map(item => item.title));
        }

        fetchData();

    }, []);

     useEffect(() => {
    const filtered = allData
      .map(item => item.title)
      .filter(title => title.toLowerCase().includes(data.toLowerCase()));
    setShortListed(filtered);
  }, [data, allData]);
  return (
    <div>
      <h1>The datas are</h1>
      <input value={data} onChange={(event) => setData(event.target.value)} />
      {shortListed.map((item) => (
        <div key={item.id}>
          <h2>{item}</h2>
    </div>
      )
  )
}
</div>)
}

export default FetchData
