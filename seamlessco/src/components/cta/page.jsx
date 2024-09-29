export const CTASection = () => {
    return (
        <>
         <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-8">
            With SeamlessCo, you get the best freelance experience!
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Join us
            </button>
            <button className="bg-white hover:bg-blue-100 text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg border-2 border-blue-600">
              Start Hiring
            </button>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}