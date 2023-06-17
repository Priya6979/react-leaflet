import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AddMarkers from './AddMarkers';

const Map = () => {
	const [markerPosition, setMarkerPosition] = useState(null);

	const handleMapClick = (e) => {
		setMarkerPosition([e.latlng.lat, e.latlng.lng]);
		// console.log()
		console.log('egjhegj');
		console.log('ejfheuh', e);
	};
	useEffect(() => {
		console.log('Updated markerPosition:', markerPosition);
	}, [markerPosition]);

	const markers = [[19.4100819, -99.1630388]];

	return (
		<MapContainer
			onClick={handleMapClick}
			center={[0, 0]}
			zoom={2}
			id="mapId"
			style={{ height: '100vh', width: '100%' }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				onClick={handleMapClick}
			/>
			<AddMarkers />
		</MapContainer>
	);
};

export default Map;
