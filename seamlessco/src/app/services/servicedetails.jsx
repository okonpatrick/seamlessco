//service/servicedetails.jsx
"use client";
import ServicePage from "@/app/services/[id].jsx";
import services from './services.json';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const service = services.find(s => s.id === id);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: { service },
  };
}

export default function ServiceDetails({ service }) {
  return <ServicePage service={service} />;
}
