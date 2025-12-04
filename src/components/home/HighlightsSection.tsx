import { GraduationCap, BookOpen, Users, Laptop, Briefcase, Award } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "1000+ Students Trained",
    description: "Successfully trained over a thousand students in various IT domains",
  },
  {
    icon: BookOpen,
    title: "20+ Courses",
    description: "Wide range of industry-relevant courses to choose from",
  },
  {
    icon: Users,
    title: "Experienced Trainers",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: Laptop,
    title: "100% Practical Learning",
    description: "Hands-on projects and real-world applications",
  },
  {
    icon: Briefcase,
    title: "Internship + Job Assistance",
    description: "Get placed in top companies with our career support",
  },
  {
    icon: Award,
    title: "Certified Courses",
    description: "Industry-recognized certifications upon completion",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Phoenix Computers?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide the best learning experience with modern facilities and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
