import {ReUseTestimonial} from "../../components/testimonials/page";

 const AllTestimonials = () => {
    return (
        <>
        <div className="text-center mt-2">
    <p className="text-lg font-medium text-gray-600 font-pj">What they are saying about us!</p>
    <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
    <ReUseTestimonial/>
    <ReUseTestimonial/>
</div>   
  </>
    )
}
export default AllTestimonials;