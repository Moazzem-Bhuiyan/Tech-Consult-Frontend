import { fetchServiceDetails } from '@/Hooks/UsegetServiceDetails';
import ServiceDetailsContainer from './_Component/ServiceDetailsContainer';

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const service = await fetchServiceDetails(id);
    return {
      title: `${service?.data?.title || 'Service Details'} - PEC Electrical`,
      description:
        service?.data?.description ||
        'Discover detailed information about our electrical services, tailored to meet your residential and commercial needs with expertise and reliability.',
    };
  } catch (error) {
    return {
      title: 'Service Details - PL TECH ',
      description:
        'Discover detailed information about our electrical services, tailored to meet your residential and commercial needs with expertise and reliability.',
    };
  }
}

export default async function ServiceDetailsPage({ params }) {
  const { id } = await params;
  let service = null;
  let error = null;

  try {
    service = await fetchServiceDetails(id);
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <ServiceDetailsContainer initialService={service} id={id} error={error} />
    </div>
  );
}
