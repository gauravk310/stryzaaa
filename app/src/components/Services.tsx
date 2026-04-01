import { useState } from "react";
import solarManufacturing from "@/assets/solar-fitting-installation_.jpg";
import electronicsRepair from "@/assets/ev-e-repair.jpeg";
import driverRepair from "@/assets/driver-reapir.jpeg";
import powerSupplyRepair from "@/assets/powr-supply-repair.jpeg";
import pcbRepair from "@/assets/imp_ppcb_repair.jpeg";
import medicalERepair from "@/assets/medical-e-reapir.jpeg"
import testRepairService from "@/assets/testing-repair-service.jpeg"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceDetail {
  title: string;
  image: string;
  tagline: string;
  description: string;
  includes: string[];
  whyUs: string[];
}

const services: ServiceDetail[] = [
  {
    title: "Solar Fitting & Installation Services",
    image: solarManufacturing,
    tagline: "End‑to‑end solar solutions for homes, businesses & industries",
    description:
      "We provide end‑to‑end solar installation solutions for homes, businesses, and industries. Our services ensure maximum energy output, high safety standards, and long‑term performance.",
    includes: [
      "Complete solar panel installation (Rooftop, ground‑mounted, residential & commercial)",
      "Solar system wiring & electrical setup",
      "Solar inverter installation & configuration",
      "Solar structure fitting & mounting",
      "Battery backup installation (Lithium / Lead Acid)",
      "Solar water heater fitting",
      "Maintenance & repair services",
      "Site survey & energy requirement assessment",
    ],
    whyUs: [
      "Professional technicians",
      "High‑quality components",
      "Fast & reliable installation",
      "Affordable service packages",
      "Long‑term support & maintenance",
    ],
  },
  {
    title: "EV Electronics Repair & Diagnostic Solutions",
    image: electronicsRepair,
    tagline: "Advanced repair & diagnostics for electric bikes & scooters",
    description:
      "We provide advanced repair and diagnostic services for electric bikes and scooters, ensuring reliable performance and long life of all major electronic components.",
    includes: [
      "MCU (Motor Control Unit) Repair & Calibration",
      "DC/BLDC Controller Repair & Replacement",
      "ECU Repair, Testing & Firmware Re‑configuration",
      "All Types of PCB Level Repairing (Battery management, charger, controller, dashboard PCBs)",
      "Throttle, display & wiring harness fault fixing",
      "CAN bus & communication fault diagnosis",
      "Overheating, cutoff, low‑speed & no‑power issue resolution",
      "Battery performance testing & cell balancing",
    ],
    whyUs: [
      "Skilled technicians with EV electronics expertise",
      "High‑precision tools & testing equipment",
      "Fast turnaround & reliable repairs",
      "Affordable service rates",
      "Support for all EV brands",
    ],
  },
  {
    title: "Drives Repair Services",
    image: driverRepair,
    tagline: "Expert repair for all types of industrial drives",
    description:
      "We specialise in diagnosing and repairing variable frequency drives (VFDs), servo drives, and DC drives across all major brands and power ratings, minimising downtime for your operations.",
    includes: [
      "VFD / Inverter drive repair & testing",
      "Servo drive repair & calibration",
      "DC drive repair & parameter restoration",
      "Drive PCB‑level component replacement",
      "On‑site commissioning & parameter setting",
      "Preventive maintenance for industrial drives",
    ],
    whyUs: [
      "Experienced drive repair engineers",
      "Multi‑brand & multi‑rating support",
      "Fast diagnosis & turnaround",
      "Genuine replacement components",
      "Warranty on repaired units",
    ],
  },
  {
    title: "Power Supplies Repair Services",
    image: powerSupplyRepair,
    tagline: "Reliable repair for SMPS, UPS & industrial power supplies",
    description:
      "We repair all types of switched‑mode power supplies, UPS systems, and industrial DC power supplies, restoring them to factory specifications with thorough testing before return.",
    includes: [
      "SMPS repair & voltage regulation restoration",
      "UPS repair & battery management",
      "Industrial DC power supply repair",
      "High‑voltage & server power supply repair",
      "Capacitor & component‑level servicing",
      "Load & burn‑in testing post‑repair",
    ],
    whyUs: [
      "PCB‑level repair expertise",
      "Original‑spec components used",
      "Full load testing before delivery",
      "Cost-effective vs. replacement",
      "Quick turnaround time",
    ],
  },
  {
    title: "Industrial Machines Power & Control Board Repair",
    image: pcbRepair,
    tagline: "Restoring CNC, PLC & industrial machine control boards",
    description:
      "We repair power and control boards for CNC machines, PLCs, HMIs, and a wide range of industrial automation equipment, reducing machine downtime and replacement costs significantly.",
    includes: [
      "CNC machine control board repair",
      "PLC module repair & firmware recovery",
      "HMI / operator panel repair",
      "Industrial servo & spindle driver board repair",
      "Relay & contactor control board servicing",
      "High‑voltage power board component replacement",
    ],
    whyUs: [
      "Deep industrial electronics expertise",
      "Support for major machine brands",
      "Reduces costly machine replacement",
      "In‑house testing rigs for validation",
      "Long‑term maintenance support",
    ],
  },
  {
    title: "Medical Electronic Repair Services",
    image: medicalERepair ,
    tagline: "Precision repair for life‑critical medical equipment",
    description:
      "We provide careful, precise repair services for medical electronic equipment, following strict quality protocols to ensure accuracy, patient safety, and regulatory compliance.",
    includes: [
      "Patient monitor & ECG machine repair",
      "Ultrasound & imaging equipment PCB repair",
      "Infusion pump & syringe driver repair",
      "Defibrillator & AED servicing",
      "Dental & surgical equipment electronics repair",
      "Power supply & battery management repair",
    ],
    whyUs: [
      "Strict quality & safety protocols",
      "Calibration post‑repair",
      "Confidential & secure handling",
      "Experienced biomedical electronics team",
      "Preventive maintenance programs",
    ],
  },
  {
    title: "Testing Equipments & Meters Repair Services",
    image: testRepairService,
    tagline: "Accurate repair & calibration for all measuring instruments",
    description:
      "We repair and calibrate a wide range of testing and measuring instruments — from multimeters and oscilloscopes to industrial process meters — ensuring accurate, reliable readings.",
    includes: [
      "Multimeter & clamp meter repair",
      "Oscilloscope repair & calibration",
      "Function / signal generator repair",
      "LCR meter & impedance analyzer repair",
      "Power quality analyzer repair",
      "Industrial process & temperature meter repair",
    ],
    whyUs: [
      "Calibration to manufacturer specs",
      "All brands & models supported",
      "Fast & reliable turnaround",
      "Certificate of calibration available",
      "Preventive service contracts",
    ],
  },
];

const ServiceModal = ({
  service,
  open,
  onOpenChange,
}: {
  service: ServiceDetail;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-foreground leading-snug pr-6">
          {service.title}
        </DialogTitle>
        <p className="text-sm text-primary font-medium pt-1">{service.tagline}</p>
      </DialogHeader>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Our Services Include */}
      <div>
        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
          Our Services Include
        </h4>
        <ul className="space-y-2">
          {service.includes.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
          Why Choose Us?
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {service.whyUs.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">⚡</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </DialogContent>
  </Dialog>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="bg-section-alt section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for sustainable energy and advanced electronics
          </p>
          {/* Stats badge */}
          <div className="inline-flex items-center gap-2 mt-4 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
            37 Projects Delivered
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-primary font-medium mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1 mb-4">
                  {service.description}
                </p>

                {/* Quick bullet preview */}
                <ul className="space-y-1 mb-4">
                  {service.includes.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Read More */}
                <button
                  onClick={() => setSelectedService(service)}
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
      {selectedService && (
        <ServiceModal
          service={selectedService}
          open={!!selectedService}
          onOpenChange={(v) => !v && setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
