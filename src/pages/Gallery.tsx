import { useState } from "react";
import { X } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "classroom", name: "Classroom" },
  { id: "lab", name: "Computer Lab" },
  { id: "events", name: "Events" },
  { id: "certification", name: "Certification" },
  { id: "projects", name: "Projects" },
];

const galleryImages = [
  { id: 1, category: "classroom", title: "Smart Classroom", gradient: "from-blue-500 to-cyan-500" },
  { id: 2, category: "lab", title: "Computer Lab", gradient: "from-purple-500 to-pink-500" },
  { id: 3, category: "events", title: "Tech Workshop", gradient: "from-orange-500 to-red-500" },
  { id: 4, category: "certification", title: "Certification Ceremony", gradient: "from-green-500 to-emerald-500" },
  { id: 5, category: "projects", title: "Student Project Demo", gradient: "from-indigo-500 to-purple-500" },
  { id: 6, category: "classroom", title: "Training Session", gradient: "from-cyan-500 to-blue-500" },
  { id: 7, category: "events", title: "Guest Lecture", gradient: "from-yellow-500 to-orange-500" },
  { id: 8, category: "lab", title: "Practical Session", gradient: "from-pink-500 to-rose-500" },
  { id: 9, category: "certification", title: "Award Distribution", gradient: "from-teal-500 to-green-500" },
  { id: 10, category: "projects", title: "Hackathon", gradient: "from-violet-500 to-indigo-500" },
  { id: 11, category: "events", title: "Career Guidance Seminar", gradient: "from-red-500 to-pink-500" },
  { id: 12, category: "classroom", title: "Interactive Learning", gradient: "from-emerald-500 to-teal-500" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our world of learning and innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="aspect-square bg-gradient-to-br cursor-pointer rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`} />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium text-center px-2">{image.title}</p>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-foreground hover:text-primary"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden">
              <div className={`w-full h-full bg-gradient-to-br ${galleryImages.find(img => img.id === selectedImage)?.gradient} flex items-center justify-center`}>
                <p className="text-2xl font-bold text-white">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        <div className="mt-12 text-center bg-muted/50 rounded-xl p-6">
          <p className="text-muted-foreground">
            📸 These are placeholder images. Real photos will be updated soon.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
