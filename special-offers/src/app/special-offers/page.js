"use client";
import React, { useContext } from 'react';
import { OfferFlightContext } from '../../context/OfferFlightContext';
import FlightHotelCard from '../components/FlightHotelCard/FlightHotelCard';
import TitleOffers from '../components/TitleOffers/TitleOffers';
import style from './specialOffers.module.scss';

const PageContent = () => {
    const { data, loading, error } = useContext(OfferFlightContext);
    

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{`${error}`}</div>;
    }

    return (
        <>
            {data.map((hotel, hotelIndex) => (
                <section key={hotel.hotel.code}>
                    <TitleOffers
                        hotelName={hotel.hotel.name}
                        fileDate={hotel.hotel.file_date}
                    />
                    <ul className={style.containerGridCards}>
                        {hotel.hotel.lowestFares.map((offer, index) => (
                            <FlightHotelCard
                                key={index}
                                hotelCode={hotel.hotel.code}
                                departureAirportName={offer.departure_airport_name}
                                departure={offer.departure}
                                returnAirportName={offer.return_airport_name}
                                returnAirport={offer.return_airport}
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
                </section>
            ))}
        </>
    );
};

export default function Page() {
    return <PageContent />;
}
