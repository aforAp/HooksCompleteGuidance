import {Link} from 'react-router-dom'

function HomePage() {
   return (
    <>
    <h1>HomePage</h1>
    Go to<Link to="/products">Go to products</Link>
    </>
   )
};

export default HomePage;