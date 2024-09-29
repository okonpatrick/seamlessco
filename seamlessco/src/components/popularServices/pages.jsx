import Image from 'next/image';
//will use aliases here.
import softwaredev from '/home/patowhizzy/Documents/codes/seamlessco-project/nest-fullstack/seamlessco/public/icons/softwaredev.png'
import financeMgt from '/home/patowhizzy/Documents/codes/seamlessco-project/nest-fullstack/seamlessco/public/icons/financeMgt.png'
import graphicDesign from '/home/patowhizzy/Documents/codes/seamlessco-project/nest-fullstack/seamlessco/public/icons/graphicDesign.png'
import productMgt from '/home/patowhizzy/Documents/codes/seamlessco-project/nest-fullstack/seamlessco/public/icons/productMgt.png'
import contentCreation from '/home/patowhizzy/Documents/codes/seamlessco-project/nest-fullstack/seamlessco/public/icons/contentCreation.png'
import webDev from '/home/patowhizzy/Documents/codes/seamlessco-project/nest-fullstack/seamlessco/public/icons/webDev.png'

const services = [
  {
    iconUrl: softwaredev,
    text: 'Software Development'
  },
  {
    iconUrl: graphicDesign,
    text: 'Graphic Design'
  },
  {
    iconUrl: productMgt,
    text: 'Product Management'
  },
  {
    iconUrl: contentCreation,
    text: 'Content Creation'
  },
  {
    iconUrl: financeMgt,
    text: 'Finance Management'
  },
  {
    iconUrl: webDev,
    text: 'Web Development'
  }
];

const PopularServicesComp = () => {
  return (
    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-12'>
      <h2 className="font-bold text-2xl">Popular Services</h2>
      <div className='justify'>
        <form class="max-w-md mx-auto">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" class="block lg:w-[400px] w-[300px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {services.map((service, index) => (
          <a
            key={index}
            href="#"
            className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex items-center mb-4">
              <Image src={service.iconUrl} alt={service.text} width={40} height={40} priority />
              <h5 className="ml-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {service.text}
              </h5>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularServicesComp;
