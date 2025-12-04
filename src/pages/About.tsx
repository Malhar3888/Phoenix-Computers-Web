import { Target, Eye, Award, Users, BookOpen, Laptop } from "lucide-react";

const trainers = [
  {
    name: "Kamal Sharma",
    role: "Lead Trainer & Founder",
    specialization: "Full Stack Development, System Design",
    experience: "15+ Years",
  },
  {
    name: "Malhar Dhavale",
    role: "Software Developer & Instructor",
    specialization: "MERN Stack, Python, Cloud",
    experience: "8+ Years",
  },
  {
    name: "Abhijeet Dhumale",
    role: "Trainer",
    specialization: "Java, Data Structures, Algorithms",
    experience: "6+ Years",
  },
  {
    name: "Sufiya Bargir",
    role: "Trainer",
    specialization: "Web Design, UI/UX, Graphics",
    experience: "5+ Years",
  },
];

const achievements = [
  "Best IT Training Institute Award - Kolhapur 2023",
  "1000+ Students Successfully Placed",
  "Authorized Training Partner - Multiple Tech Companies",
  "ISO 9001:2015 Certified Institute",
  "5-Star Rating on Google Reviews",
  "Featured in Local Media for Excellence in IT Education",
];

const About = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Phoenix Computers
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering students with real-world IT skills since 2010
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, Phoenix Computers started with a simple mission: to provide quality IT education 
                that bridges the gap between academic learning and industry requirements. What began as a small 
                computer training center has now grown into Kolhapur's premier IT training institute.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we have trained more than 1000 students, helping them build successful careers 
                in top IT companies across India. Our commitment to practical learning, industry-relevant curriculum, 
                and personalized attention has made us the preferred choice for aspiring IT professionals.
              </p>
              <p className="text-muted-foreground">
                Today, we offer 20+ courses covering everything from basic computer skills to advanced technologies 
                like AI, Machine Learning, and Full Stack Development. Our state-of-the-art facilities and 
                experienced trainers ensure that every student gets the best learning experience.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-primary-foreground">P</span>
                </div>
                <p className="text-2xl font-bold text-foreground">Since 2010</p>
                <p className="text-muted-foreground">14+ Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower students with real-world IT skills through practical, industry-relevant training 
              that prepares them for successful careers in the ever-evolving technology landscape.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading IT training institute that transforms lives through quality education, 
              creating skilled professionals who drive innovation and contribute to the digital economy.
            </p>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Teaching Methodology</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Laptop,
                title: "100% Practical Learning",
                description: "Hands-on projects and real-world applications from day one",
              },
              {
                icon: Users,
                title: "Small Batch Sizes",
                description: "Personalized attention with maximum 15 students per batch",
              },
              {
                icon: BookOpen,
                title: "Industry Curriculum",
                description: "Course content updated regularly based on industry trends",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Trainers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Meet Our Trainers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {trainer.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{trainer.name}</h3>
                <p className="text-primary text-sm font-medium">{trainer.role}</p>
                <p className="text-muted-foreground text-sm mt-2">{trainer.specialization}</p>
                <p className="text-xs text-muted-foreground mt-1">{trainer.experience} Experience</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-muted/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            <Award className="inline-block h-8 w-8 text-primary mr-2" />
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <p className="text-foreground text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
