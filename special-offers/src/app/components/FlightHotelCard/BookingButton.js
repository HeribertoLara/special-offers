import PropTypes from 'prop-types';
import styles from './FlightHotelCard.module.scss';

const BookingButton = ({ bookingUrl }) => (
    <div className={styles.bookingButtonContainer}>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            <button type="button" className={styles.bookingButton}>Book Now</button>
        </a>
    </div>
);

BookingButton.propTypes = {
    bookingUrl: PropTypes.string.isRequired,
};

export default BookingButton;