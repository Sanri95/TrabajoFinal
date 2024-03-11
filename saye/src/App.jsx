import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import {Nav} from './components/Nav';
import { Container } from './components/Container';
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherPanel from './components/WeatherPanel';


function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
    		<Nav/>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
    	    <Container />
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<br></br>
			<h2>Antes de viajar revisa el clima:</h2><br></br>
			<br></br>
			<br></br><br></br>
			
			<br></br>
			<br></br>
			<br></br>
			
			<WeatherPanel />
     		<Footer/>
		</>
	);
}

export default App;
