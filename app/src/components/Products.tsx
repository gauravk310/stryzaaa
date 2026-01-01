import solarStreetLamp from "@/assets/solar-street-lamp.png";
import solarStreetLampDark from "@/assets/solar-street-lamp-dark.png";
import solarComponents from "@/assets/solar-components.png";
import solarComponentsDark from "@/assets/solar-components-dark.png";
import electronicTorches from "@/assets/electronic-torches.png";
import electronicTorchesDark from "@/assets/electronic-torches-dark.png";

const products = [
  {
    title: "Solar Street Lamps",
    image: solarStreetLamp,
    darkImage: solarStreetLampDark,
    description: "Energy-efficient lighting solutions for cities and communities",
    features: ["100% solar powered", "Weather resistant", "Low maintenance"],
  },
  {
    title: "Solar Components",
    image: solarComponents,
    darkImage: solarComponentsDark,
    description: "High-efficiency components for optimal energy conversion",
    features: ["25-year warranty", "22% efficiency rate", "Certified quality"],
  },
  {
    title: "Electronic Torches",
    image: electronicTorches,
    darkImage: electronicTorchesDark,
    description: "Durable lighting solutions for professional use",
    features: ["Solar rechargeable", "Waterproof design", "Long battery life"],
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-background section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium solar solutions engineered for maximum efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                {/* Light-mode image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 block dark:hidden"
                />
                {/* Dark-mode image (falls back to light image if darkImage is missing) */}
                <img
                  src={product.darkImage ?? product.image}
                  alt={`${product.title} (dark)`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 hidden dark:block"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
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

export default Products;
