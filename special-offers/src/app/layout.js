import { Inter } from "next/font/google";
import "./globals.scss";
import ClientProvider from './components/ClientProvider/ClientProvider'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hotel + Flight",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
