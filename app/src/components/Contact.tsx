import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import heroSolarBg from "@/assets/hero-solar-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // Debug log removed.
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@stryzasolar.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Solar Park, Industrial Area, Delhi - 110001",
    },
  ];

  return (
    <section id="contact" className="bg-section-alt section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl shadow-card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={heroSolarBg}
                  alt="Solar panels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={heroSolarBg}
                  alt="Solar farm"
                  className="w-full h-full object-cover brightness-90"
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={heroSolarBg}
                  alt="Solar installation"
                  className="w-full h-full object-cover brightness-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
