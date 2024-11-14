import React from 'react';

// Type definitions
interface IconProps {
  className?: string;
}

interface ServiceCardProps {
  icon: React.FC<IconProps>;
  title: string;
  description: string;
  iconColor: string;
}

interface CustomStyle extends React.CSSProperties {
  '--icon-color': string;
}

// Custom icon components using SVG
const IconArrowRight: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconMessage: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H5l-2 2v-2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v10z"/>
  </svg>
);

const IconGroup: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
    <path d="M6 20c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
    <path d="M18 20c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
  </svg>
);

const IconNotification: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a9 9 0 0 0-9 9v4l-2 2h20l-2-2v-4a9 9 0 0 0-9-9z"/>
    <path d="M12 21a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3z"/>
  </svg>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
         style={{ backgroundColor: 'rgba(var(--icon-color), 0.1)' }}>
      <div className="w-6 h-6" style={{ color: 'rgb(var(--icon-color))' }}>
        <Icon />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-600">
      Learn More <span className="ml-2 w-4 h-4"><IconArrowRight /></span>
    </a>
  </div>
);

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: IconMessage,
      title: "Instant Messaging",
      description: "Send instant SMS messages to your contacts and groups, ensuring timely communication.",
      iconColor: "0, 196, 253"
    },
    {
      icon: IconGroup,
      title: "Group Messaging",
      description: "Effortlessly reach large groups with bulk messaging capabilities for events and announcements.",
      iconColor: "255, 149, 67"
    },
    {
      icon: IconNotification,
      title: "Real-Time Notifications",
      description: "Keep your contacts informed with real-time notifications sent directly to their devices.",
      iconColor: "70, 222, 153"
    },
    {
      icon: IconNotification,
      title: "Contact Management",
      description: "Easily manage your saved contacts and groups for streamlined messaging and organization.",
      iconColor: "255, 99, 99"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Efficiently connect with your audience through our SMS messaging system.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} style={{ '--icon-color': service.iconColor } as CustomStyle}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
