import './App.css';
import { Route, Routes } from 'react-router-dom';
import Map from './Map';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import './images/marker-icon.png';
import './images/marker-shadow.png';

function App() {
	return (
		<div>
			{' '}
			<h1>World Map Application</h1>
			<Routes>
				<Route
					exact
					path="/"
					element={<Map />}
				/>
				<Route
					exact
					path="/countries"
					element={<CountryList />}
				/>
				<Route
					path="/countries/:country"
					element={<CountryDetails />}
				/>
			</Routes>
		</div>
	);
}

export default App;
