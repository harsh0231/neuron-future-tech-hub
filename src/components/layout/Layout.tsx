
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from './Head';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Head />
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
