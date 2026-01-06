import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import heroSolarBg from "@/assets/hero-solar-bg.jpg";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate phone: 
    // If starts with +, expect 12 digits total (approx 2 country + 10 phone). 
    // If no +, expect exactly 10 digits.
    const phoneDigits = formData.phone.replace(/\D/g, "");
    const hasPlus = formData.phone.startsWith("+");

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else {
      if (hasPlus) {
        // Basic check: must have enough digits. User asked for "10 numbers long", 
        // usually implying the subscriber part. We essentially check for reasonable length.
        // Using 12 as strict length for +XX format (2 code + 10 number).
        if (phoneDigits.length !== 12) {
          newErrors.phone = "Phone number must be 12 digits including country code";
        }
      } else {
        if (phoneDigits.length !== 10) {
          newErrors.phone = "Phone number must be exactly 10 digits";
        }
      }
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: "Message sent ✅",
        description: "Thanks! We'll get back to you soon.",
      });
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Failed to send message", error);
      toast({
        title: "Sending failed ⚠️",
        description: "Please try again later or contact support.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "phone") {
      // Remove all non-digit and non-plus chars first to check raw length
      // Also prevent + in middle
      let cleaned = value.replace(/[^0-9+]/g, "");

      // Ensure + is only at start
      if (cleaned.indexOf('+') > 0) {
        cleaned = cleaned.replace(/\+/g, ""); // strip all + if not at start (simplified)
        // Re-add if it was supposed to be at start? 
        // Logic: If user typed + in middle, just remove it. 
        // If original started with +, keeps it unless cleaned[0] was the removed one.
        // Better:
        const hasPlusStart = value.startsWith('+');
        cleaned = cleaned.replace(/\+/g, '');
        if (hasPlusStart) cleaned = '+' + cleaned;
      }

      if (cleaned.startsWith("+")) {
        // Limit to 13 chars total ( + and 12 digits)
        if (cleaned.length > 13) {
          cleaned = cleaned.slice(0, 13);
        }

        // Apply formatting: +XX XXXXXXXXXX
        if (cleaned.length > 3) {
          formattedValue = cleaned.slice(0, 3) + " " + cleaned.slice(3);
        } else {
          formattedValue = cleaned;
        }
      } else {
        // Limit to 10 digits
        if (cleaned.length > 10) {
          cleaned = cleaned.slice(0, 10);
        }
        formattedValue = cleaned;
      }
    }

    setFormData({ ...formData, [name]: formattedValue });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9637585537",
    },
    {
      icon: Mail,
      title: "Email",
      value: "stryza.in@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: `SWAPNIL NIWAS 82 HIWARE, RD MARUTIMANDIR
KURANWADI, Anagar, Solapur, Mohol, Maharashtra, India, 413214`,
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
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-border"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
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
                  placeholder="+91 9637585537"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-border"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
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
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-border"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSending ? "Sending..." : "Send Message"}
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
                    <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
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
