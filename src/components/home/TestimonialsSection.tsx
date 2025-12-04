import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer at TCS",
    content: "Phoenix Computers transformed my career. The practical approach and industry-relevant curriculum helped me land my dream job at TCS.",
    rating: 5,
  },
  {
    name: "Rahul Patil",
    role: "Full Stack Developer",
    content: "The MERN Stack course was exceptional. The trainers are highly skilled and always available to help. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Data Analyst at Infosys",
    content: "Best decision I made was joining their Data Science course. The hands-on projects prepared me well for the industry.",
    rating: 5,
  },
  {
    name: "Amit Deshmukh",
    role: "Web Developer",
    content: "From zero coding knowledge to becoming a professional web developer, Phoenix Computers made it possible. Thank you!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our students who have transformed their careers with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-foreground text-center mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={goToPrev}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={goToNext}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
