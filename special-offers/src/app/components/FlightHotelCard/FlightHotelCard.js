import { useContext } from 'react';
import { OfferFlightContext } from '../../../context/OfferFlightContext';
import PropTypes from 'prop-types';
import { FaPlaneDeparture, FaPlaneArrival, FaDollarSign, FaPlane, FaCalendarAlt, FaCheck, FaTimes } from 'react-icons/fa';
import BookingButton from './BookingButton';
import styles from './FlightHotelCard.module.scss';

const FlightHotelCard = ({ 
    hotelCode,
    departureAirportName, 
    departure, 
    returnAirportName, 
    returnAirport, 
    departureDate, 
    returnDate, 
    originalCost, 
    cost, 
    airlineName, 
    airline, 
    nonstop, 
    bookingUrl 
   
}) => {
    const { formatDate } = useContext(OfferFlightContext);

    // Definir las rutas de las imágenes basadas en el código del hotel
    const hotelImages = {
        '10817': '/the-fives-beach.jpg',
        '10815': '/the-fives-Downtown.jpg',
        '10983': '/The-fives-beachfront.avif',
        '10818': '/The-fives-oceanfront.avif',
    };

    const hotelImage = hotelImages[hotelCode] || '/default-image.jpg'; // Imagen por defecto si no se encuentra el código

    return (
        <li className={styles.card}>
            <figure className={styles.figure}>
                <img src={hotelImage} alt={`hotel + flight`} className={styles.image} />
                <figcaption className={styles.caption}>
                    <aside className={styles.infoGroup}>
                        <p className={styles.departureInfo}>
                            <FaPlaneDeparture className={styles.icon} />
                            <strong>Departure:</strong><br/>
                            {departureAirportName} ({departure})
                        </p>
                        <p className={styles.arrivalInfo}>
                            <FaPlaneArrival className={styles.icon} />
                            <strong>Destination:</strong><br/>
                            {returnAirportName} ({returnAirport})
                        </p>
                    </aside>
                    <aside className={styles.infoGroup}>
                        <p className={styles.dateInfo}>
                            <FaCalendarAlt className={styles.icon} />
                            <strong>Departure Date:</strong><br/>
                            <time dateTime={departureDate}>
                                {formatDate(departureDate)}
                            </time>
                        </p>
                        <p className={styles.dateInfo}>
                            <FaCalendarAlt className={styles.icon} />
                            <strong>Return Date:</strong> <br/>
                            <time dateTime={returnDate}>
                                {formatDate(returnDate)}
                            </time>
                        </p>
                    </aside>
                    <aside className={styles.infoGroup}>
                        <p className={styles.costInfo}>
                            <FaDollarSign className={styles.icon} />
                            <strong>Original Cost:</strong> 
                            <span className={styles.originalCost}>${originalCost} USD</span>
                        </p>
                        <p className={styles.costInfo}>
                            <FaDollarSign className={styles.icon} />
                            <strong>Cost:</strong> 
                            ${cost} USD
                        </p>
                    </aside>
                    <aside className={styles.infoGroup}>
                        <p className={styles.airlineInfo}>
                            <FaPlane className={styles.icon} />
                            <strong>Airline:</strong> 
                            {airlineName} ({airline})
                        </p>
                        <p className={styles.nonstopInfo}>
                            {nonstop === 'Y' ? 
                            <FaCheck className={styles.icon} /> 
                            : <FaTimes className={styles.icon} />}
                            <strong>Nonstop:</strong> 
                            {nonstop === 'Y' ? 'Yes' : 'No'}
                        </p>
                    </aside>
                </figcaption>
            </figure>
            <BookingButton bookingUrl={bookingUrl} className={styles.bookingButton} />
        </li>
    );
};

FlightHotelCard.propTypes = {
    hotelCode: PropTypes.string.isRequired,
    departureAirportName: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    returnAirportName: PropTypes.string.isRequired,
    returnAirport: PropTypes.string.isRequired,
    departureDate: PropTypes.string.isRequired,
    returnDate: PropTypes.string.isRequired,
    originalCost: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    airlineName: PropTypes.string.isRequired,
    airline: PropTypes.string.isRequired,
    nonstop: PropTypes.string.isRequired,
    bookingUrl: PropTypes.string.isRequired,
    formatDate: PropTypes.func.isRequired,
};

export default FlightHotelCard;
