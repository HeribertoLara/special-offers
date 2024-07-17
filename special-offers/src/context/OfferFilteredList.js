"use client";
import React, { useState, useEffect } from 'react';
import FlightHotelCard from '../components/FlightHotelCard/FlightHotelCard';

const OfferList = ({ offers }) => {
    const [filteredOffers, setFilteredOffers] = useState([]);

    useEffect(() => {
        const filterUniqueOffers = () => {
            const seenDepartures = new Set();
            const seenReturns = new Set();
            const uniqueOffers = offers.filter(offer => {
                if (seenDepartures.has(offer.departure) || seenReturns.has(offer.return)) {
                    return false; // Duplicado encontrado
                }
                seenDepartures.add(offer.departure);
                seenReturns.add(offer.return);
                return true; // No es duplicado, agregar a la lista filtrada
            });
            setFilteredOffers(uniqueOffers);
        };

        filterUniqueOffers();
    }, [offers]);

    const isDuplicateDetected = filteredOffers.length !== offers.length;

    return (
        <div>
            {isDuplicateDetected && (
                <p>Se han eliminado ofertas duplicadas.</p>
            )}
            <ul>
                {filteredOffers.map((offer, index) => (
                    <FlightHotelCard
                        key={index}
                        departure={offer.departure}
                        return={offer.return}
                        departureAirportName={offer.departure_airport_name}
                        returnAirportName={offer.return_airport_name}
                        departureDate={offer.departureDate}
                        returnDate={offer.returnDate}
                        originalCost={offer.originalCost}
                        cost={offer.cost}
                        airlineName={offer.airline_name}
                        airline={offer.airline}
                        nonstop={offer.nonstop}
                        bookingUrl={offer.booking_url}
                    />
                ))}
            </ul>
        </div>
    );
};

export default OfferList;
