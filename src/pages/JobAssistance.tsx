import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Target, FileText, Users, TrendingUp, CheckCircle } from "lucide-react";

const companies = [
  "TCS", "Infosys", "Wipro", "Tech Mahindra", "Capgemini", 
  "Accenture", "Cognizant", "HCL", "Mindtree", "Technosoft"
];

const JobAssistance = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Job Assistance Program
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just train you - we help you get hired. Our comprehensive job assistance program ensures you land your dream job.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "95%", label: "Placement Rate" },
            { number: "2000+", label: "Students Placed" },
            { number: "50+", label: "Partner Companies" },
            { number: "₹4-8 LPA", label: "Average Package" },
          ].map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Job Assistance Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: FileText,
              title: "Resume Building",
              description: "Professional resume writing and optimization to highlight your skills and stand out to employers.",
            },
            {
              icon: Target,
              title: "Interview Preparation",
              description: "Mock interviews, technical rounds practice, and HR interview tips to boost your confidence.",
            },
            {
              icon: Users,
              title: "Soft Skills Training",
              description: "Communication skills, personality development, and professional etiquette training.",
            },
            {
              icon: Briefcase,
              title: "Placement Drives",
              description: "Regular campus placement drives with top IT companies visiting our institute.",
            },
            {
              icon: TrendingUp,
              title: "Career Counseling",
              description: "One-on-one career guidance to help you choose the right career path in IT.",
            },
            {
              icon: CheckCircle,
              title: "Job Referrals",
              description: "Direct referrals to partner companies and access to exclusive job opportunities.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Partner Companies */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Our Hiring Partners</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-card border border-border rounded-lg px-6 py-3">
                <span className="font-semibold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/10 via-purple-500/10 to-background rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Start Your Career?</h3>
          <p className="text-muted-foreground mb-6">
            Join Phoenix Computers and let us help you achieve your career goals
          </p>
          <Link to="/admission">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default JobAssistance;
