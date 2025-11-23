
import { useState, useEffect } from "react";
const SearchComponent = () => {
    const datas = [
        {id:1,
            name:"ball",
        },
        {id: 2, name:"cat"},
        {id: 3, name:"dog"},
        {id: 4, name:"fish"},
    ];

    const [data, setData] = useState([]);
    const [search, SetSearch] = useState("");
 
    useEffect(() => {
        function SearchData() {
            const filteredData = datas.map(data => data.name).filter(name => name.toLowerCase().includes(search.toLowerCase()));
            setData(filteredData);
        }

        SearchData();
    }, [search]);

  return (
    <div>
      <input type="text" value={search} onChange={(event) => SetSearch(event.target.value)} />
      {data.map((datas, index) => (
        <div key={index}>
            {datas}
        </div>
      ))}
    </div>
  )
}

export default SearchComponent
