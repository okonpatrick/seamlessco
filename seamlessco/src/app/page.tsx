import Navbar from '../components/navbar/page';
import HeroPage from '../components/hero-section/page';
import PopularServicesComp from "../components/popularServices/pages"
import Testimonial from "../components/testimonials/page";
import Faq from "@/app/faq/page";
import {CTASection} from "../components/cta/page";
import {Footer} from "../components/footer/page";
import NewsFeed from "./news/page";

export default function Home() {
  return (
    <>
        <Navbar/>
      <HeroPage/>
      <PopularServicesComp/>
      <Testimonial
        title="Amazing Service!"
        description="Our clients love the services we provide, thanks to this amazing platform."
        imageUrl="/images/client.jpg" // Replace with the actual image path
        review="This platform has transformed the way we do business. Highly recommend it!"
      />
      <Faq/>
      <CTASection/>
      <NewsFeed/>
      <Footer/>
      </>
  );
}
