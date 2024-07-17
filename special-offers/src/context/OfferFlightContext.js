"use client";

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const OfferFlightContext = createContext();

const urls = [
    'https://www.reservhotel.com/hotel_air_tools/10815.json',
 /* 'https://www.reservhotel.com/hotel_air_tools/10816.json', */
    'https://www.reservhotel.com/hotel_air_tools/10817.json',
    'https://www.reservhotel.com/hotel_air_tools/10818.json',
    'https://www.reservhotel.com/hotel_air_tools/10983.json'
];

const OfferFlightProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(urls.map(url => axios.get(url)));
                let allData = responses.map(response => response.data);

                // Aplanar el array de arrays en un solo array de vuelos
                allData = allData.flat();

                // Eliminar duplicados basado en booking_url
                const uniqueFlights = allData.reduce((unique, flight) => {
                    if (!unique.some(item => item.booking_url === flight.booking_url)) {
                        unique.push(flight);
                    }
                    return unique;
                }, []);


                setData(uniqueFlights);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };


    return (
        <OfferFlightContext.Provider value={{ data, loading, error, formatDate }}>
            {children}
        </OfferFlightContext.Provider>
    );
};

export { OfferFlightContext, OfferFlightProvider };
