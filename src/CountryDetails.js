import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = ({ country }) => {
	const [details, setDetails] = useState(null);

	useEffect(() => {
		const fetchCountryDetails = async () => {
			try {
				const response = await axios.get(
					`https://restcountries.com/v3.1/name/${country}`
				);
				setDetails(response.data[0]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCountryDetails();
	}, [country]);

	if (!details) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>{details.name.common}</h2>
			{/* Display country-specific details */}
		</div>
	);
};

export default CountryDetails;
