import ReduxProvider from '@/context/redux-provider';
import './globals.css';
import Navbar from './navbar';

export const metadata = {
  title: 'The Three Shop',
  description: 'Developed by SohanEmon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider>
          <>
            <Navbar />
            <br />
            {children}
          </>
        </ReduxProvider>
      </body>
    </html>
  );
}
