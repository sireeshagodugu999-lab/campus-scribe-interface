import { CampusInfoCard } from "@/components/CampusInfoCard";
import { PromptBox } from "@/components/PromptBox";
import campusBackground from "@/assets/campus-background.jpg";
import campusLogo from "@/assets/campus-logo.png";
import scheduleIcon from "@/assets/schedule-icon.png";
import facilitiesIcon from "@/assets/facilities-icon.png";
import diningIcon from "@/assets/dining-icon.png";
import libraryIcon from "@/assets/library-icon.png";
import adminIcon from "@/assets/admin-icon.png";

const Index = () => {
  const campusServices = [
    {
      title: "Academic Schedules",
      description: "Comprehensive chronological orchestration of academic curricula, encompassing semester-based course allocations, examination timetables, and pedagogical resource scheduling with real-time synchronization capabilities.",
      icon: scheduleIcon,
      iconAlt: "Academic Schedule Management"
    },
    {
      title: "Campus Facilities",
      description: "Extensive infrastructure inventory including state-of-the-art laboratories, amphitheaters, recreational complexes, and specialized research facilities with accessibility features and utilization optimization protocols.",
      icon: facilitiesIcon,
      iconAlt: "Campus Facilities Directory"
    },
    {
      title: "Culinary Services",
      description: "Sophisticated gastronomic offerings featuring diverse nutritional programs, dietary accommodation protocols, sustainable sourcing initiatives, and convenient meal plan configurations for optimal student sustenance.",
      icon: diningIcon,
      iconAlt: "Dining Services Information"
    },
    {
      title: "Library Resources",
      description: "Comprehensive bibliographic repositories featuring digital collections, research databases, collaborative study environments, and advanced information retrieval systems with 24/7 accessibility protocols.",
      icon: libraryIcon,
      iconAlt: "Library Services Portal"
    },
    {
      title: "Administrative Operations",
      description: "Streamlined bureaucratic processes encompassing registration protocols, financial aid coordination, academic transcript management, and institutional policy administration with efficient digital workflow integration.",
      icon: adminIcon,
      iconAlt: "Administrative Services Hub"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="absolute top-0 right-0 z-10 p-6">
        <div className="flex items-center space-x-3">
          <img 
            src={campusLogo} 
            alt="Smart Campus Assistant Logo" 
            className="w-12 h-12 object-contain drop-shadow-lg"
          />
          <div className="text-right">
            <h2 className="text-lg font-bold text-primary drop-shadow-sm">Campus Assistant</h2>
            <p className="text-xs text-primary/80">AI-Powered University Companion</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${campusBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
              Smart Campus
              <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Your sophisticated intellectual companion for navigating university life with unprecedented efficiency and comprehensive institutional knowledge
            </p>
          </div>
          
          <PromptBox />
        </div>
      </section>

      {/* Information Services Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive University Information Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accessing institutional knowledge through advanced query processing and intelligent response generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusServices.map((service, index) => (
              <CampusInfoCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconAlt={service.iconAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border/60 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src={campusLogo} 
              alt="Smart Campus Assistant" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-semibold text-primary">Smart Campus Assistant</span>
          </div>
          <p className="text-muted-foreground">
            Empowering academic excellence through intelligent information accessibility
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
