import Navbar from '../components/navbar/page';
import HeroPage from '../components/hero-section/page';
import ProtectedRoute from '../components/ProtectedRoute';
import {AuthProvider} from "../components/context/AuthContext";
import PopularServicesComp from "../components/popularServices/pages"
import SignIn from "../components/auth/signin";
import SignUp from "../components/auth/signup";
import Testimonial from "../components/testimonials/page";

//import {MoreTestimonials} from "../../pages/moreTestimonial/page";

export default function Home() {
  return (
    <>
    <Navbar/>
      <HeroPage/>
      <PopularServicesComp/>
      <Testimonial/>
      </>
  );
}
