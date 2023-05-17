import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

function PopularMovie() {
  // Tidak perlu props movies (props drilling)
  return (
    <>
      <Navbar />
      <h2>Popular Movie</h2>
      <Footer />
    </>
  );
}

export default PopularMovie;
