import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { Database } from 'lucide-react';

const methodologies = [
  {
    title: 'Comprehensive Data Analysis and Risk Assessment',
    description:
      'Thorough Evaluation of Your Data Environment to Identify Risks and Develop Tailored Migration Plans',
  },
  {
    title: 'Minimal Downtime Strategies Using Real-Time Replication',
    description:
      'Ensuring Seamless Transitions with Advanced Techniques to Minimize Business Disruption During Migration',
  },
  {
    title: 'Automated Testing and Validation Procedures',
    description:
      'Ensuring Data Integrity and System Functionality with Automated Testing and Validation During Migration',
  },
  {
    title: 'Post-Migration Optimization and Monitoring',
    description:
      'Continuous Performance Enhancements and Real-Time Monitoring to Maximize Efficiency After Migration',
  },
];

function MethodologyCard({ title, description }) {
  return (
    <div className="flex flex-col gap-4 !p-6 bg-white rounded-lg border border-gray-200 hover:bg-primary/25 hover:scale-x-95 transform transition duration-500 ">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#156A7E] to-[#26C0E4] p-2 ">
        <Database className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function MigrationMethodologies() {
  return (
    <ResponsiveContainer className={' justyfy-center items-center flex'}>
      <section className="w-full !py-16 !px-4 flex justify-center ">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-3 !mb-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              Proven Migration Methodologies
            </h2>
            <p className="text-gray-600 text-center">
              Our systematic approach ensures successful outcomes:
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodologies.map((methodology, index) => (
              <MethodologyCard
                key={index}
                title={methodology.title}
                description={methodology.description}
              />
            ))}
          </div>
        </div>
      </section>
    </ResponsiveContainer>
  );
}
