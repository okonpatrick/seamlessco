//services/page.jsx
import Link from 'next/link';
import Image from 'next/image';
import services from './services.json';

export default function ServicesGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link href={`/services/${service.id}`} key={service.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                 layout="fill"
                 objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    
  );
}