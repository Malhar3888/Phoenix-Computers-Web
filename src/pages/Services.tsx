import { GraduationCap, Code, Briefcase, Presentation, Monitor, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: GraduationCap,
    title: "IT Training",
    description: "Comprehensive IT training programs covering programming languages, web development, data science, and more. Our courses are designed to meet industry standards and prepare students for real-world challenges.",
    features: ["Expert Trainers", "Hands-on Projects", "Certification", "Flexible Timing"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software development services for businesses. We build web applications, mobile apps, and enterprise solutions using the latest technologies and best practices.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Maintenance & Support"],
  },
  {
    icon: Briefcase,
    title: "Internship Programs",
    description: "Gain real-world experience through our internship programs. Work on live projects under the guidance of industry professionals and enhance your portfolio.",
    features: ["Live Projects", "Mentorship", "Certificate", "Job Assistance"],
  },
  {
    icon: Presentation,
    title: "Workshops & Seminars",
    description: "Regular workshops and seminars on trending technologies, career guidance, and soft skills development. Stay updated with the latest industry trends.",
    features: ["Tech Workshops", "Career Guidance", "Guest Lectures", "Networking Events"],
  },
  {
    icon: Monitor,
    title: "Smart Classroom",
    description: "State-of-the-art smart classrooms equipped with modern technology for an enhanced learning experience. Interactive sessions with digital resources.",
    features: ["Interactive Displays", "High-speed Internet", "Modern Labs", "Recording Facility"],
  },
  {
    icon: FileCode,
    title: "Project Guidance",
    description: "Expert guidance for academic projects including Diploma, B.Tech, and MCA final year projects. We help students from concept to completion.",
    features: ["Diploma Projects", "B.Tech Projects", "MCA Projects", "Documentation Help"],
  },
];

const Services = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT services to help you learn, build, and grow in your career
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Contact us today to learn more about our services and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission">
              <Button className="bg-gradient-to-r from-primary to-purple-600">
                Enroll Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
