import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

function TopRatedMovie() {
  // Tidak perlu props movies (props drilling)
  return (
    <>
      <Navbar />
      <h2>Top Rated Movie</h2>
      <Footer />
    </>
  );
}

export default TopRatedMovie;
