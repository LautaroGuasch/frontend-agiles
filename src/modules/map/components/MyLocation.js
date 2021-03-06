import React from 'react';

const MyLocation = ({ setCenter, setMarker }) => {
    const findMe = () => {
        if (!navigator.geolocation) {
            alert('El navegador no soporta geolocalizacion');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                if (setCenter) {
                    setCenter(latitude, longitude);
                }
                if (setMarker) {
                    setMarker(longitude, latitude, 'Mi ubicacion', `lat: ${latitude}, lng: ${longitude}`);
                }
            },
            (error) => {
                alert('Error al obtener la ubicacion');
            }
        );
    };
    return (
        <button
            type="button"
            className="btn  btn-block btn-success mb-4 col-md-12 mt-4 col-md-offset-2 "
            onClick={findMe}
        >
            Mi.Ubicación
        </button>

    );

};

export default MyLocation;