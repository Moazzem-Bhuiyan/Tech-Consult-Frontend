import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { Database } from 'lucide-react';
import IndustryExpertise from './IndustryExpertise';
import MethodologyPage from './AdditionalInfoAboutmethodology';

const phases = [
  {
    number: 1,
    title: 'Discovery & Assessment',
    description:
      'Comprehensive analysis of current state, performance baselines, risk assessment, and ROI projections.',
  },
  {
    number: 2,
    title: 'Architecture & Strategy',
    description:
      'Target state design, migration planning, framework development, and testing procedures.',
  },
  {
    number: 3,
    title: 'Implementation & Migration',
    description:
      'Comprehensive analysis of current state, performance baselines, risk assessment, and ROI projections.',
  },
  {
    number: 4,
    title: 'Optimization & Enablement',
    description:
      'Post-migration tuning, monitoring setup, team training, and ongoing support transition.',
  },
];

function PhaseCard({ number, title, description }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center !p-10 hover:bg-primary/25 hover:scale-105 transform transition duration-500 rounded-3xl">
      <div className="flex items-center justify-center w-10 h-10 rounded bg-cyan-400">
        <Database className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <Animatetext x={-20} duration={1}>
          <h3 className="text-lg font-bold text-gray-900">
            Phase {number}: {title}
          </h3>
        </Animatetext>
        <Animatetext x={20} duration={1}>
          <p className="text-sm text-gray-600">{description}</p>
        </Animatetext>
      </div>
    </div>
  );
}

export default function OurMethodology() {
  return (
    <div className="bg-cover bg-center bg-no-repeat !bg-[url('/images/Methodology.png')] ">
      <ResponsiveContainer className={' flex justify-center items-center !mt-[200px]'}>
        <section className="w-full !py-16 !px-4 flex justify-center">
          <div className=" mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center justify-center gap-2 !mb-12">
              <Animatetext x={-20} duration={1}>
                {' '}
                <h2 className="text-4xl font-bold text-gray-900 text-center">Our Methodology</h2>
              </Animatetext>
              <Animatetext x={20} duration={1}>
                {' '}
                <p className="text-gray-600 text-center italic">
                  Seamless and Optimized Migrations with Minimal Disruption
                </p>
              </Animatetext>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {phases.map((phase) => (
                <PhaseCard key={phase.number} {...phase} />
              ))}
            </div>
            <MethodologyPage />
          </div>
        </section>
      </ResponsiveContainer>
    </div>
  );
}
