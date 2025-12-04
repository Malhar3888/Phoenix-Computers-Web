import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";

const topCourses = [
  {
    title: "Python Full Stack Development",
    duration: "6 Months",
    students: "200+",
    description: "Master Python, Django, REST APIs, and modern web development",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "MERN Stack Development",
    duration: "5 Months",
    students: "180+",
    description: "Build full-stack apps with MongoDB, Express, React & Node.js",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Data Science & ML",
    duration: "6 Months",
    students: "150+",
    description: "Learn data analysis, machine learning & AI fundamentals",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Designing",
    duration: "3 Months",
    students: "300+",
    description: "HTML, CSS, JavaScript & responsive design mastery",
    gradient: "from-green-500 to-emerald-500",
  },
];

const TopCoursesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Our Top Courses
            </h2>
            <p className="text-muted-foreground">
              Industry-relevant courses designed for your success
            </p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-32 bg-gradient-to-br ${course.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </span>
                </div>
                <Link to="/courses">
                  <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCoursesSection;
