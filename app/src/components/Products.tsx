import { useState } from "react";
import solarStreetLamp from "@/assets/solar-street-lamp.png";
import solarStreetLampDark from "@/assets/solar-street-lamp-dark.png";
import solarComponents from "@/assets/solar-components.png";
import solarComponentsDark from "@/assets/solar-components-dark.png";
import electronicTorches from "@/assets/electronic-torches.png";
import electronicTorchesDark from "@/assets/electronic-torches-dark.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductDetail {
  title: string;
  image: string;
  darkImage?: string;
  tagline: string;
  description: string;
  features: { label: string; detail: string }[];
  benefits: string[];
  idealFor: string[];
}

const products: ProductDetail[] = [
  {
    title: "Solar Plate Cleaning Robot",
    image: solarStreetLamp,
    darkImage: solarStreetLampDark,
    tagline: "Advanced Cleaning Automation for Solar Panels",
    description:
      "Our Solar Plate Cleaning Robot is designed to ensure maximum solar efficiency by keeping panels dust‑free, water‑free, and performing at peak output. Built for both residential and industrial solar plants, it provides a completely automated, safe, and low‑maintenance cleaning solution.",
    features: [
      {
        label: "Automatic, waterless cleaning system",
        detail: "Removes dust, dirt, bird droppings, and pollutants without water.",
      },
      {
        label: "AI‑based path tracking",
        detail: "Ensures uniform cleaning and prevents edge drops.",
      },
      {
        label: "Lightweight & durable design",
        detail:
          "Suitable for rooftop solar panels, ground‑mount installations, and industrial solar farms.",
      },
      {
        label: "High‑efficiency cleaning brushes",
        detail: "Designed to protect the panel's surface.",
      },
      {
        label: "Remote control & timer scheduling",
        detail: "Energy‑efficient operation using minimal power.",
      },
      {
        label: "Weather‑resistant and long‑life materials",
        detail: "Built to last in harsh outdoor environments.",
      },
    ],
    benefits: [
      "Improves solar panel efficiency by up to 30%",
      "Reduces manual cleaning cost and risk",
      "Safe for technicians and rooftop structures",
      "High durability with low maintenance",
      "Works effectively in dusty, dry, and hot environments",
    ],
    idealFor: [
      "Residential solar rooftops",
      "Commercial buildings",
      "Industrial solar plants",
      "Solar farms",
      "Government installations",
    ],
  },
  {
    title: "Electric Torch",
    image: electronicTorches,
    darkImage: electronicTorchesDark,
    tagline: "High‑Performance Lighting for Home, Travel & Emergency Use",
    description:
      "Our Electric Torch delivers powerful illumination with long battery life, durable construction, and reliable performance in any situation. Designed for everyday users, travelers, security professionals, and industrial needs, it provides bright and efficient lighting whenever required.",
    features: [
      {
        label: "High‑brightness LED light",
        detail: "Long‑range beam with energy‑efficient performance.",
      },
      {
        label: "Rechargeable lithium battery",
        detail: "Long backup time and fast charging.",
      },
      {
        label: "Multiple lighting modes",
        detail: "High beam, low beam, flashing, SOS.",
      },
      {
        label: "Durable metal body",
        detail: "Shock‑resistant, heat‑resistant, and long‑lasting.",
      },
      {
        label: "Water‑resistant design",
        detail: "Suitable for outdoor use, even in light rain.",
      },
      {
        label: "Compact & lightweight",
        detail: "Easy to carry in pocket, bag, or vehicle.",
      },
    ],
    benefits: [
      "Reliable during power cuts and night travel",
      "Ideal for camping, hiking, home emergencies",
      "Strong beam for security and night patrol",
      "Long‑lasting battery reduces frequent charging",
      "Robust body suitable for rough handling",
    ],
    idealFor: [
      "Home & household use",
      "Security guards",
      "Outdoor travelers",
      "Industries & warehouses",
      "Emergency & disaster kits",
    ],
  },
  {
    title: "Electric Grass Cutting Machine",
    image: solarComponents,
    darkImage: solarComponentsDark,
    tagline: "Powerful, Efficient & Easy‑to‑Use Lawn Maintenance Solution",
    description:
      "Our Electric Grass Cutting Machine is designed for fast, smooth, and effortless lawn maintenance. With a high‑efficiency motor and durable cutting blades, it delivers perfect trimming for gardens, farms, and commercial landscapes.",
    features: [
      {
        label: "High‑power electric motor",
        detail: "Provides strong cutting performance with consistent speed.",
      },
      {
        label: "Sharp, durable steel blades",
        detail: "Ensures clean and even cutting of thick grass and weeds.",
      },
      {
        label: "Adjustable cutting height",
        detail: "Customize the lawn length as per your requirement.",
      },
      {
        label: "Lightweight & ergonomic design",
        detail: "Comfortable to operate for long durations.",
      },
      {
        label: "Safety switch & overload protection",
        detail: "Prevents accidental start and motor damage.",
      },
      {
        label: "Low noise & eco‑friendly",
        detail: "Ideal for residential areas.",
      },
    ],
    benefits: [
      "Saves time with fast and uniform cutting",
      "Easy to maintain, low‑cost operation",
      "No fuel required — fully electric",
      "Reduces physical effort compared to manual tools",
      "Suitable for continuous use in small and large areas",
    ],
    idealFor: [
      "Home gardens",
      "Farmhouses",
      "Landscaping services",
      "Parks & public gardens",
      "Small agricultural use",
    ],
  },
];

const ProductModal = ({
  product,
  open,
  onOpenChange,
}: {
  product: ProductDetail;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-foreground leading-snug pr-6">
          {product.title}
        </DialogTitle>
        <p className="text-sm text-primary font-medium pt-1">{product.tagline}</p>
      </DialogHeader>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Key Features */}
      <div>
        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
          Key Features
        </h4>
        <ul className="space-y-3">
          {product.features.map((f, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <div>
                <span className="text-sm font-semibold text-foreground">{f.label}</span>
                <span className="text-sm text-muted-foreground"> — {f.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
          Benefits
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {product.benefits.map((b, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5 flex-shrink-0">★</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Ideal For */}
      <div>
        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
          Ideal For
        </h4>
        <div className="flex flex-wrap gap-2">
          {product.idealFor.map((item, idx) => (
            <span
              key={idx}
              className="text-xs font-medium bg-secondary text-secondary-foreground border border-border rounded-full px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  return (
    <section id="products" className="bg-background section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium solar & smart solutions engineered for maximum efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 block dark:hidden"
                />
                <img
                  src={product.darkImage ?? product.image}
                  alt={`${product.title} (dark)`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 hidden dark:block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1 leading-snug">
                  {product.title}
                </h3>
                <p className="text-xs text-primary font-medium mb-3">
                  {product.tagline}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1 mb-4">
                  {product.description}
                </p>

                {/* Quick feature preview */}
                <ul className="space-y-1 mb-4">
                  {product.features.slice(0, 3).map((f, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span className="line-clamp-1">{f.label}</span>
                    </li>
                  ))}
                </ul>

                {/* Read More */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-auto w-full flex items-center justify-center gap-2 text-sm font-semibold text-primary border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 1 0-1.06L9.44 9.5 5.22 5.28a.75.75 0 0 1 1.06-1.06l4.75 4.75a.75.75 0 0 1 0 1.06l-4.75 4.75a.75.75 0 0 1-1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={!!selectedProduct}
          onOpenChange={(v) => !v && setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Products;
