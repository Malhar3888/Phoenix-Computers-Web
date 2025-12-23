import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send, Download, CheckCircle, Loader2 } from "lucide-react"; // Added Loader2 for loading state

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare Web3Forms Data
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("access_key", "1f827eb3-d0d5-44a6-9b90-827dc596f8f8");
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("mobile", formData.mobile);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("course", formData.course);
    formDataToSubmit.append("city", formData.city);
    formDataToSubmit.append("message", formData.message);
    formDataToSubmit.append("subject", `New Admission Enquiry from ${formData.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Enquiry Submitted!",
          description: "We'll contact you within 24 hours.",
        });
        // Reset Form
        setFormData({ name: "", mobile: "", email: "", course: "", city: "", message: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <Select 
                  value={formData.course} 
                  onValueChange={(value) => setFormData({ ...formData, course: value })}
                  required
                >
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
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-purple-600"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Send className="h-4 w-4 mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
              </Button>
            </form>
          </div>

          {/* Info Section remains same... */}
          <div className="space-y-6">
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
            {/* Contact details and brochure section here */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admission;