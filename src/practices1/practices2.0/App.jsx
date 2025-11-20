const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
 let data = Math.round(Math.random() * (max + 1));
 return data;

}

function Hello({data}) {
    return (
        <>
        <h1>{data}</h1>
        </>
    )
}

function Hello2() {
    return (
        <>
        <h2>The data was awesome</h2>
        </>
    )
}

function Header({values, datas}) {
    const description = reactDescriptions[getRandomInt(2)];
    return (
        <header>
            <h1>React Essentials</h1>
            <p>{description}</p>
            {values}
            {datas}
           
        </header>
    )
}

function App() {
   return (
    <Header values={<Hello data="panna"/>} datas={<Hello2 />} />
   )
}

export default App;