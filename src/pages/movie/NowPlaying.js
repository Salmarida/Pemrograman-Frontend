import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";


function NowPlayingMovie() {
  // Tidak perlu props movies (props drilling)
  return (
    <>
      <Navbar />
      <h2>Now Playing</h2>
      <Footer />
    </>
  );
}

export default NowPlayingMovie;
