import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Download, Users, BookOpen, Star } from "lucide-react";

const courses = [
  {
    title: "Python Full Stack Development",
    duration: "6 Months",
    students: "200+",
    rating: 4.9,
    description: "Master Python programming, Django framework, REST APIs, and full-stack web development with databases and deployment.",
    syllabus: ["Python Basics & Advanced", "Django Framework", "REST APIs", "Database Management", "Frontend Integration", "Deployment"],
    timing: "Morning / Evening Batches",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Java Full Stack Development",
    duration: "6 Months",
    students: "180+",
    rating: 4.8,
    description: "Complete Java development with Spring Boot, Hibernate, microservices architecture, and modern deployment practices.",
    syllabus: ["Core Java", "Advanced Java", "Spring Boot", "Hibernate", "Microservices", "DevOps Basics"],
    timing: "Morning / Evening Batches",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "MERN Stack Development",
    duration: "5 Months",
    students: "220+",
    rating: 4.9,
    description: "Build modern web applications using MongoDB, Express.js, React.js, and Node.js with real-world projects.",
    syllabus: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Authentication"],
    timing: "Morning / Evening Batches",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "C & C++ Programming",
    duration: "3 Months",
    students: "150+",
    rating: 4.7,
    description: "Foundation programming course covering C and C++ with data structures and object-oriented programming concepts.",
    syllabus: ["C Fundamentals", "Pointers & Memory", "C++ OOP", "Data Structures", "File Handling", "Projects"],
    timing: "Flexible Batches",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    title: "Data Science & Machine Learning",
    duration: "6 Months",
    students: "120+",
    rating: 4.9,
    description: "Comprehensive data science course covering Python, statistics, machine learning algorithms, and real-world applications.",
    syllabus: ["Python for Data Science", "Statistics", "Machine Learning", "Deep Learning", "Data Visualization", "Projects"],
    timing: "Weekend / Weekday Batches",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Artificial Intelligence",
    duration: "6 Months",
    students: "80+",
    rating: 4.8,
    description: "Advanced AI course covering neural networks, NLP, computer vision, and cutting-edge AI technologies.",
    syllabus: ["AI Fundamentals", "Neural Networks", "NLP", "Computer Vision", "Reinforcement Learning", "AI Ethics"],
    timing: "Weekend Batches",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Tally Prime + GST",
    duration: "2 Months",
    students: "300+",
    rating: 4.8,
    description: "Complete accounting course with Tally Prime, GST filing, and financial reporting for business professionals.",
    syllabus: ["Tally Basics", "Inventory Management", "GST Setup", "Tax Filing", "Financial Reports", "Payroll"],
    timing: "Morning / Evening Batches",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "CCC (Course on Computer Concepts)",
    duration: "3 Months",
    students: "400+",
    rating: 4.6,
    description: "Government recognized computer course covering basic computing, internet, and office applications.",
    syllabus: ["Computer Basics", "MS Office", "Internet & Email", "Digital Literacy", "Cyber Security Basics", "Exam Prep"],
    timing: "Flexible Batches",
    gradient: "from-gray-500 to-slate-600",
  },
  {
    title: "Web Designing (HTML + CSS + JS)",
    duration: "3 Months",
    students: "350+",
    rating: 4.7,
    description: "Create beautiful, responsive websites with HTML5, CSS3, JavaScript, and modern frameworks like Bootstrap.",
    syllabus: ["HTML5", "CSS3 & Flexbox", "JavaScript", "Bootstrap", "Responsive Design", "Projects"],
    timing: "Morning / Evening Batches",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "React Native App Development",
    duration: "4 Months",
    students: "90+",
    rating: 4.8,
    description: "Build cross-platform mobile applications for iOS and Android using React Native and modern development practices.",
    syllabus: ["React Fundamentals", "React Native", "Navigation", "APIs Integration", "State Management", "Publishing"],
    timing: "Weekend / Weekday Batches",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Computer Basics",
    duration: "1 Month",
    students: "500+",
    rating: 4.5,
    description: "Essential computer skills for beginners including typing, Windows, internet browsing, and basic applications.",
    syllabus: ["Computer Fundamentals", "Typing", "Windows OS", "Internet Basics", "Email", "Basic Applications"],
    timing: "Flexible Batches",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Advanced Excel",
    duration: "1.5 Months",
    students: "250+",
    rating: 4.7,
    description: "Master Excel with advanced formulas, pivot tables, macros, VBA, and data analysis techniques.",
    syllabus: ["Advanced Formulas", "Pivot Tables", "Charts", "Macros", "VBA Basics", "Data Analysis"],
    timing: "Morning / Evening Batches",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    title: "Graphic Designing",
    duration: "3 Months",
    students: "180+",
    rating: 4.8,
    description: "Learn professional graphic design using Adobe Photoshop, Illustrator, Canva, and design principles.",
    syllabus: ["Design Principles", "Photoshop", "Illustrator", "Canva", "Logo Design", "Social Media Graphics"],
    timing: "Flexible Batches",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Cyber Security & Ethical Hacking",
    duration: "4 Months",
    students: "60+",
    rating: 4.9,
    description: "Introduction to cybersecurity concepts, ethical hacking basics, and security best practices.",
    syllabus: ["Security Fundamentals", "Network Security", "Ethical Hacking Basics", "Penetration Testing", "Security Tools", "Compliance"],
    timing: "Weekend Batches",
    gradient: "from-red-600 to-orange-600",
  },
];

const Courses = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Courses
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-relevant courses designed by experts to help you build a successful career in IT
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className={`h-24 bg-gradient-to-br ${course.gradient} relative p-4 flex items-end`}>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-yellow-500" />
                    {course.rating}
                  </span>
                </div>

                {/* Syllabus Preview */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    Syllabus Overview:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {course.syllabus.slice(0, 4).map((item, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {item}
                      </span>
                    ))}
                    {course.syllabus.length > 4 && (
                      <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        +{course.syllabus.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Timing */}
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Batch Timing:</strong> {course.timing}
                </p>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    Syllabus
                  </Button>
                  <Link to="/admission" className="flex-1">
                    <Button size="sm" className="w-full bg-gradient-to-r from-primary to-purple-600">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for Fees */}
        <div className="mt-12 text-center bg-muted/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Want to know about fees?</h3>
          <p className="text-muted-foreground mb-4">Contact us for detailed fee structure and available discounts</p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-primary to-purple-600">
              Contact for Details
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Courses;
