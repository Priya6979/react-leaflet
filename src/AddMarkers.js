import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const AddMarkers = () => {
	const [markers, setMarkers] = useState([
		{
			lat: 40,
			lng: -95.6268544,
		},
	]);

	const map = useMapEvents({
		click: (e) => {
			setMarkers([...markers, e.latlng]);
		},
	});
	return (
		<>
			{markers.map((marker, i) => (
				<Marker
					key={`marker-${i}`}
					position={marker}
				>
					<Popup>
						<span>
							A pretty CSS3 popup. <br /> Easily customizable.
						</span>
					</Popup>
				</Marker>
			))}
			{/* <Marker position={markers[0]}>
        <Popup>
          <span>
            A pretty CSS3 popup. <br /> Easily customizable.
          </span>
        </Popup>
      </Marker> */}
		</>
	);
};

export default AddMarkers;
