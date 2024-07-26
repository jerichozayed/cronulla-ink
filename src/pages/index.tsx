import Head from 'next/head';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Cronulla Ink Tattoo Studio</title>
        <meta name="description" content="Welcome to Cronulla Ink Tattoo Studio" />
      </Head>

      <Navbar />
      <ImageSlider />
      <ImageGallery />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8 py-12">
        {/* Introduction Section */}
        <section className="w-11/12 lg:w-8/12 bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Cronulla Ink Tattoo Studio</h2>
          <p className="text-lg">We are a premier tattoo studio located in the heart of Cronulla, offering custom tattoo designs and professional services. Our artists are dedicated to creating unique pieces of art tailored to your vision.</p>
        </section>

        {/* Services Section */}
        <section className="w-11/12 lg:w-8/12 bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Custom Tattoos</h3>
              <p>We specialize in custom tattoos, bringing your ideas to life with our artistic expertise.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tattoo Cover-Ups</h3>
              <p>Our artists are skilled in creating cover-ups to transform and enhance existing tattoos.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tattoo Aftercare</h3>
              <p>We provide professional advice and products to ensure proper care for your new tattoo.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-11/12 lg:w-8/12 bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">Ready to book your appointment or have questions? Contact us today!</p>
          <a href="mailto:info@cronullaink.com" className="text-blue-500 underline">info@cronullaink.com</a>
        </section>
      </main>
    </div>
  );
};

export default Home;

