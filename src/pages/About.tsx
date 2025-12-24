import { Target, Eye, Award, Users, BookOpen, Laptop } from "lucide-react";

// ----- SEPARATED FOUNDERS/LEADERS -----
const founders = [
  {
    name: "PANDIT DHAVALE",
    role: "CEO & Founder",
    specialization: "Vb.net, SQL Server, Web Technologies",
    experience: "25+ Years",
    image: "/images/Pandit.png", 
  },
  {
    name: "PRASHANT DHAVALE",
    role: "Manager & Founder",
    specialization: "Tally, GST, Digital Marketing",
    experience: "20+ Years",
    image: "/images/prashant.png",
  },
];

// ----- THE EXPERT TEAM -----
const team = [
  // ADDED ANITA DHAVALE HERE
  {
    name: "Malhar Dhavale",
    role: "Lead Trainer & Developer",
    specialization: "Full Stack Development, System Design",
    experience: "2+ Years",
    image: "/images/Malhar.png",
  },
  {
    name: "Kamal Sharma",
    role: "Software Developer & Trainer",
    specialization: "MERN Stack, Python, Cloud",
    experience: "2+ Years",
    image: "/images/kamal.jpg",
  },
  {
    name: "Abhijeet Dhumale",
    role: "Software Developer & Trainer",
    specialization: "Java, Data Structures, Algorithms",
    experience: "2+ Years",
    image: "/images/abhi.jpg",
  },
  {
    name: "Pranali Bhandare",
    role: "Trainer",
    specialization: "Web Design, C++, PowerBi",
    experience: "1+ Years",
    image: "/images/pranali.jpg",
  },
];

const achievements = [
  "Best IT Training Institute Award - Kolhapur 2018",
  "Authorized Training Partner - Multiple Tech Companies",
  "ISO 1997:20 Certified Institute",
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
            Empowering students with real-world IT skills since 1997
          </p>
        </div>

        {/* Our Story & Since 2010 Image */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1997, Phoenix Computers started with a simple mission: to provide quality IT education
                that bridges the gap between academic learning and industry requirements. What began as a small
                computer training center has now grown into Kolhapur's premier IT training institute.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we have trained more than 2000 students, helping them build successful careers
                in top IT companies across India. Our commitment to practical learning, industry-relevant curriculum,
                and personalized attention has made us the preferred choice for aspiring IT professionals.
              </p>
              <p className="text-muted-foreground">
                Today, we offer 20+ courses covering everything from basic computer skills to advanced technologies
                like AI, Machine Learning, and Full Stack Development. Our state-of-the-art facilities and
                experienced trainers ensure that every student gets the best learning experience.
              </p>
            </div>
            
            {/* Since 2010 Image */}
            <div className="flex items-center justify-center p-4">
                <img 
                  src="/images/story.jpg" 
                  alt="Since 2010 Excellence" 
                  className="rounded-2xl shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-300"
                />
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

        {/* Our Trainers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Visionary Leadership</h2>
          
          {/* Section 1: Founders / Main Leaders */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            {founders.map((trainer, index) => (
              <div key={index} className="bg-card border-2 border-primary/20 rounded-xl p-8 text-center hover:shadow-xl transition-shadow md:w-1/3 transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="w-32 h-32 mx-auto mb-6 shadow-lg rounded-full overflow-hidden relative border-4 border-primary/10">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-primary/10');
                      const span = document.createElement('span');
                      span.className = "text-3xl font-bold text-primary";
                      span.innerText = trainer.name.charAt(0);
                      e.currentTarget.parentElement.appendChild(span);
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{trainer.name}</h3>
                <p className="text-primary font-bold text-md mb-2">{trainer.role}</p>
                <div className="h-px w-16 bg-border mx-auto my-3"></div>
                <p className="text-muted-foreground text-sm mb-1">{trainer.specialization}</p>
                <p className="text-xs text-muted-foreground font-medium">{trainer.experience} Experience</p>
              </div>
            ))}
          </div>

          {/* Section 2: The Expert Team */}
          <h3 className="text-xl font-semibold text-center text-muted-foreground mb-6">Our Expert Faculty & Administration</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((trainer, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                {/* Image Container with Fallback */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden relative bg-gradient-to-br from-primary/80 to-purple-500/80">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center');
                      const span = document.createElement('span');
                      span.className = "text-2xl font-bold text-primary-foreground absolute";
                      span.innerText = trainer.name.charAt(0);
                      e.currentTarget.parentElement.appendChild(span);
                    }}
                  />
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