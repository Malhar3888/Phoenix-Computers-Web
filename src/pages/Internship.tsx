import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, Users, Award, Clock, CheckCircle } from "lucide-react";

const internshipPrograms = [
  {
    title: "Web Development Internship",
    duration: "3 Months",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    projects: "2-3 Live Projects",
  },
  {
    title: "Python Development Internship",
    duration: "3 Months",
    skills: ["Python", "Django", "REST APIs", "Database"],
    projects: "2-3 Live Projects",
  },
  {
    title: "Data Science Internship",
    duration: "4 Months",
    skills: ["Python", "ML", "Data Analysis", "Visualization"],
    projects: "1-2 Live Projects",
  },
  {
    title: "Mobile App Development Internship",
    duration: "3 Months",
    skills: ["React Native", "Firebase", "APIs", "Publishing"],
    projects: "1-2 Apps",
  },
];

const Internship = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Internship Programs
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gain real-world experience and kickstart your IT career with our industry-focused internship programs
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Code, title: "Live Projects", desc: "Work on real client projects" },
            { icon: Users, title: "Mentorship", desc: "Guidance from industry experts" },
            { icon: Award, title: "Certificate", desc: "Industry-recognized certification" },
            { icon: Briefcase, title: "Job Ready", desc: "Become employment ready" },
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Programs */}
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Available Programs</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {internshipPrograms.map((program, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Clock className="h-4 w-4" />
                {program.duration}
                <span className="mx-2">•</span>
                {program.projects}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {program.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <Link to="/admission">
                <Button variant="outline" className="w-full">Apply Now</Button>
              </Link>
            </div>
          ))}
        </div>

        {/* What You'll Get */}
        <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-background rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What You'll Get</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Work on real industry projects",
              "Learn from experienced mentors",
              "Build your professional portfolio",
              "Get internship completion certificate",
              "Letter of recommendation",
              "Job placement assistance",
              "Networking opportunities",
              "Soft skills development",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/admission">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
              Apply for Internship
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Internship;
