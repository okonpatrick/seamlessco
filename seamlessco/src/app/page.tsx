import Navbar from '../components/navbar/page';
import HeroPage from '../components/hero-section/page';
import ProtectedRoute from '../components/ProtectedRoute';
//import {AuthProvider} from "./context/AuthContext";
import PopularServicesComp from "../components/popularServices/pages"
import Testimonial from "../components/testimonials/page";
import {Faq} from "./faq/page";
import {CTASection} from "../components/cta/page";
import {Footer} from "../components/footer/page";
import NewsFeed from "./news/page";

export default function Home() {
  return (
    <>
        {/* <AuthProvider> */}
        <Navbar/>
      <HeroPage/>
      <PopularServicesComp/>
      <Testimonial/>
      <Faq/>
      <CTASection/>
      <NewsFeed/>
      <Footer/>
      {/* </AuthProvider> */}
      </>
  );
}
