import Header from './Header';
import Footer from './Footer';
import FloatingCart from '@/components/ui/floating-cart';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Layout;