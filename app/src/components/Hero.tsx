import heroSolarBg from "@/assets/hero-solar-bg.jpg";
import solarStreetLamp from "@/assets/solar-street-lamp.png";
import electronicsRepair from "@/assets/electronics-repair.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSolarBg})` }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="text-foreground">Revive Your Electronics,</span>
              <br />
              <span className="text-primary">Harness the Sun</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Stryza – Your Trusted Partner in Solar Manufacturing, Electronics
              Solutions, and Government Tendering
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Get Your Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Images Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                  <img
                    src={solarStreetLamp}
                    alt="Solar street lamp with wind turbines"
                    className="rounded-xl shadow-card w-full h-48 object-cover"
                  />
                </div>
                <div className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                  <img
                    src={electronicsRepair}
                    alt="Electronics PCB repair"
                    className="rounded-xl shadow-card w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div
                className="bg-card rounded-xl shadow-card p-6 flex flex-col justify-center animate-slide-in-right"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Trusted by 09+ Projects
                </h3>
                <p className="text-muted-foreground text-sm">
                  Delivering sustainable energy + electronic solutions across
                  Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
