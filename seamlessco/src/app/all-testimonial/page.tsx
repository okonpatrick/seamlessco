import { ReUseTestimonial } from "../../components/testimonials/page";

const AllTestimonials = () => {
  return (
    <>
      <div className="text-center mt-2">
        <p className="text-lg font-medium text-gray-600 font-pj">
          What they are saying about us!
        </p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Our happy clients say about us
        </h2>
        <ReUseTestimonial
          testimony1="This product has changed our business!"
          testimony2="Excellent customer service and great results."
          testimony3="We saw significant growth after using this."
          testifierName1="John Doe"
          testifierName2="Jane Smith"
          testifierName3="Michael Johnson"
          testifierBio1="CEO, Company A"
          testifierBio2="Manager, Company B"
          testifierBio3="Founder, Company C"
          review=""
        />
        <ReUseTestimonial
          testimony1="Best decision we've made this year."
          testimony2="Their expertise is unmatched."
          testimony3="We highly recommend their services."
          testifierName1="Sarah Brown"
          testifierName2="Chris White"
          testifierName3="Lisa Black"
          testifierBio1="CTO, Company D"
          testifierBio2="COO, Company E"
          testifierBio3="CEO, Company F"
          review=""

        />
      </div>
    </>
  );
};

export default AllTestimonials;
