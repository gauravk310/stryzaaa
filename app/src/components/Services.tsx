import solarManufacturing from "@/assets/solar-manufacturing.jpg";
import electronicsRepair from "@/assets/electronics-repair.jpg";
import governmentTendering from "@/assets/government-tendering.jpg";

const services = [
  {
    title: "Solar Manufacturing Solutions",
    image: solarManufacturing,
    features: [
      "Solar-powered street lamps",
      "High-efficiency solar components",
      "Durable electronic Solution",
    ],
  },
  {
    title: "Electronics, Automation, Solar repairing",
    image: electronicsRepair,
    features: [
      "PCB repairing & automation",
      "Power supply and Automation repairing",
      "All type of electronic repairing solutions",
    ],
  },
  {
    title: "Tendering & Government Projects",
    image: governmentTendering,
    subtitle: "Corporate and Government Tender Participation",
    features: [
      "Government tender participation",
      "End-to-end project execution",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-section-alt section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for sustainable energy and advanced
            electronics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {service.subtitle}
                  </p>
                )}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
