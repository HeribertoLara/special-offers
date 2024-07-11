// src/app/components/ClientProvider/ClientProvider.js
"use client";

import { OfferFlightProvider } from '../../../context/OfferFlightContext';

export default function ClientProvider({ children }) {
  return <OfferFlightProvider>{children}</OfferFlightProvider>;
}
