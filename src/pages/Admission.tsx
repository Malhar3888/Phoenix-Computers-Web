import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send, Download, CheckCircle } from "lucide-react";

const courses = [
  "Python Full Stack Development",
  "Java Full Stack Development",
  "MERN Stack Development",
  "C & C++ Programming",
  "Data Science & Machine Learning",
  "Artificial Intelligence",
  "Tally Prime + GST",
  "CCC (Course on Computer Concepts)",
  "Web Designing (HTML + CSS + JS)",
  "React Native App Development",
  "Computer Basics",
  "Advanced Excel",
  "Graphic Designing",
  "Cyber Security & Ethical Hacking",
];

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll contact you within 24 hours.",
    });
    setFormData({ name: "", mobile: "", email: "", course: "", city: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Admission Enquiry
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards your IT career. Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Mobile Number *</label>
                <Input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email Address *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Course Interested *</label>
                <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">City</label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any questions or specific requirements?"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600">
                <Send className="h-4 w-4 mr-2" />
                Submit Enquiry
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Why Join */}
            <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-background rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Join Phoenix Computers?</h3>
              <ul className="space-y-3">
                {[
                  "Industry-relevant curriculum",
                  "100% practical learning approach",
                  "Experienced industry trainers",
                  "Small batch sizes for personal attention",
                  "Internship & job assistance",
                  "Flexible batch timings",
                  "Certificate upon completion",
                  "Affordable fee structure",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Brochure */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Download Brochure</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get detailed information about all our courses
              </p>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Contact</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>📞 +91 98765 43210</p>
                <p>📧 info@phoenixcomputers.in</p>
                <p>📍 Kolhapur, Maharashtra</p>
                <p>⏰ Mon-Sat: 9AM - 8PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admission;
