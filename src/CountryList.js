// CountryList.js
import React from 'react';
import { Link } from 'react-router-dom';
import countries from './countries.json';

const CountryList = () => {
	return (
		<ul>
			{countries.map((country) => (
				<li key={country.name.common}>
					<Link to={`/countries/${country.name.common}`}>
						{country.name.common}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default CountryList;
