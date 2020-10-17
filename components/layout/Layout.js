// import Footer from 'components/layout/Footer'
import FooterTwo from 'components/layout/FooterTwo'

const Layout = ({ children }) => {
  return (
    <>
    <main id="app" className="antialiased text-gray-900">
      <div className="min-h-screen">
        {children}
      </div>
    </main>
    <FooterTwo />
    </>
  );
};

export default Layout;
