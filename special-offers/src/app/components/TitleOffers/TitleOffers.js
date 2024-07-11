import { useContext } from 'react';
import { OfferFlightContext } from '../../../context/OfferFlightContext';
import PropTypes from 'prop-types';
import styles from './TitleOffers.module.scss';

const TitleOffers = ({ hotelName, fileDate }) => {
  const { formatDate } = useContext(OfferFlightContext);
  const formattedDate = formatDate(fileDate);

  return (
    <section className={styles.containerTitle}>
      <h1 className={styles.title}>{hotelName} + Flight Packages</h1>
     {/*  <time dateTime={fileDate} className={styles.date}>{formattedDate}</time> */}
      <h3 className={styles.subtitle}>Offers</h3>
    </section>
  );
};

TitleOffers.propTypes = {
  hotelName: PropTypes.string.isRequired,
  fileDate: PropTypes.string.isRequired,
};

export default TitleOffers;