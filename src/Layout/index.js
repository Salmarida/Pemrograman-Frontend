import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar></Navbar>
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
