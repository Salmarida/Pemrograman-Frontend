import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";


function CreateMovie() {
  // Tidak perlu props movies (props drilling)
  return (
    <>
      <Navbar />
      <h2>Create Movie</h2>
      <Footer />
    </>
  );
}

export default CreateMovie;
