"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://www.reservhotel.com/hotel_air_tools/10817.json')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error al cargar los datos.</div>;
    }

    return (
        <div>
            <h1>Esto es special offers</h1>
            {data && (
                <div>
                    <h2>{data.hotel.name}</h2>
                    <p>Código del Hotel: {data.hotel.code}</p>
                    <p>Fecha del archivo: {data.hotel.file_date}</p>
                    <h3>Ofertas:</h3>
                    <ul>
                        {data.hotel.lowestFares.map((offer, index) => (
                            <li key={index}>
                                <p>Salida: {offer.departure_airport_name} ({offer.departure})</p>
                                <p>Destino: {offer.return_airport_name} ({offer.return_airport})</p>
                                <p>Fecha de Salida: {offer.departureDate}</p>
                                <p>Fecha de Regreso: {offer.returnDate}</p>
                                <p>Costo Original: ${offer.originalCost}</p>
                                <p>Costo: ${offer.cost}</p>
                                <p>Aerolínea: {offer.airline_name} ({offer.airline})</p>
                                <p>Directo: {offer.nonstop === 'Y' ? 'Sí' : 'No'}</p>
                                <a href={offer.booking_url} target="_blank" rel="noopener noreferrer">Reservar</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

