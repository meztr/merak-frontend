import Footer from 'components/layout/Footer'

const Layout = ({ children }) => {
  return (
    <>
    <main id="app" className="antialiased text-gray-900">
      <div className="bg-gray-200 min-h-screen">
        {children}
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Layout;
