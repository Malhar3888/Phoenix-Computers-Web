import { useState, useRef, useEffect } from "react";
import { X, ZoomIn, Play, Pause, Volume2, VolumeX, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Categories
const galleryCategories = [
  { id: "all", name: "All" },
  { id: "classroom", name: "Classroom" },
  { id: "lab", name: "Computer Lab" },
  { id: "events", name: "Events" },
  { id: "certification", name: "Certification" },
  { id: "projects", name: "Projects" },
];

// Data with Video, Single Image, and Album types
const galleryItems = [
  // --------------------------------------------------------
  // 1. VIDEOS
  // --------------------------------------------------------
  { 
    id: 101, 
    type: "video",
    category: "events", 
    title: "Our Institute Overview", 
    src: "/images/PC.mp4", 
    poster: "/images/page.jpg"
  },
  { 
    id: 102, 
    type: "video",
    category: "projects", 
    title: "Our Project Showcase", 
    src: "/images/project_video.mp4", // Placeholder
    poster: "/images/pro1.png"
  },

  // --------------------------------------------------------
  // 2. ALBUMS (Multiple Images)
  // --------------------------------------------------------
  {
    id: 201,
    type: "album",
    category: "projects",
    title: "Full Stack Development Projects",
    src: "/images/pro1.png",
    images: [
      "/images/pro5.png",
      "/images/pro2.png",
      "/images/pro3.png",
      "/images/pro4.png"
    ]
  },
  /*{
    id: 202,
    type: "album",
    category: "classroom",
    title: "Interactive Theory Sessions",
    src: "/images/class_thumb.jpg", // Replace with real path
    images: [
      "/images/class1.jpg",
      "/images/class2.jpg",
      "/images/class3.jpg"
    ]
  },*/
  // --- NEW LANDSCAPE VIDEO ADDED HERE ---
  { 
    id: 205, 
    type: "video",
    category: "Openings", 
    title: "Opening Ceremony 2025", 
    src: "/images/PHOENIX.mp4", 
    poster: "/images/Phoenixbr.png",
    // orientation: "landscape"  <-- REMOVED (Defaults to Portrait/Vertical)
  },
  {
    id: 203,
    type: "album",
    category: "certification",
    title: "Annual Convocation Ceremony",
    src: "/images/cert_group.jpg", // Replace with real path
    images: [
      "/images/cert_dist1.jpg",
      "/images/cert_dist2.jpg",
      "/images/cert_dist3.jpg"
    ]
  },

  // --------------------------------------------------------
  // 3. SINGLE IMAGES - CERTIFICATIONS & AWARDS
  // --------------------------------------------------------
  { 
    id: 1, 
    type: "image",
    category: "events", 
    title: "Best Performance Award", 
    src: "/images/p1.jpg" 
  },
  { 
    id: 2, 
    type: "image",
    category: "events", 
    title: "Student Achievements 2024", 
    src: "/images/p2.jpg" 
  },
  { 
    id: 3, 
    type: "image",
    category: "certification", 
    title: "CCC Certification Excellence", 
    src: "/images/s2.jpg" 
  },
  { 
    id: 4, 
    type: "image",
    category: "certification", 
    title: "Tally ERP 9 Gold Certified", 
    src: "/images/s3.jpg" 
  },
  { 
    id: 5, 
    type: "image",
    category: "certification", 
    title: "Top Performer: Advanced Excel", 
    src: "/images/s1.jpg"
  },
  { 
    id: 5, 
    type: "image",
    category: "certification", 
    title: "Top Performer: Advanced Excel", 
    src: "/images/Q1.jpg"
  },{ 
    id: 5, 
    type: "image",
    category: "certification", 
    title: "Top Performer: Advanced Excel", 
    src: "/images/Q2.jpg"
  },

  // --------------------------------------------------------
  // 4. SINGLE IMAGES - LAB & CLASSROOM
  // --------------------------------------------------------
  /*{ 
    id: 6, 
    type: "image",
    category: "lab", 
    title: "High-Tech Computer Lab", 
    src: "/images/lab1.jpg" // Replace with real path
  },
  { 
    id: 7, 
    type: "image",
    category: "lab", 
    title: "Students During Practice", 
    src: "/images/lab2.jpg" // Replace with real path
  },
  { 
    id: 8, 
    type: "image",
    category: "lab", 
    title: "Hardware & Networking Session", 
    src: "/images/lab3.jpg" // Replace with real path
  },
  { 
    id: 9, 
    type: "image",
    category: "classroom", 
    title: "Weekend Coding Workshop", 
    src: "/images/workshop.jpg" // Replace with real path
  },
  { 
    id: 10, 
    type: "image",
    category: "projects", 
    title: "Inventory System UI Design", 
    src: "/images/ui_design.jpg" // Replace with real path
  },*/
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Album/Carousel State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Video Controls
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Reset album index when opening a new item
  useEffect(() => {
    if (selectedItem) {
      setCurrentImageIndex(0);
      setIsPlaying(false);
      setIsMuted(false);
    }
  }, [selectedItem]);

  // --- Handlers ---

  const toggleVideoPlay = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedItem?.type === 'album') {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedItem?.type === 'album') {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="py-12 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Gallery
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Take a glimpse into our world of learning, innovation, and memories.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="relative px-6 py-2 rounded-full text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeCategory === category.id ? "text-white" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"}`}>
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900
                  ${item.type === 'video' ? 'row-span-2 md:col-span-1' : 'row-span-1 col-span-1'}
                `}
              >
                {/* --- GRID ITEM RENDER --- */}
                {item.type === 'video' ? (
                  <div className="w-full h-full relative">
                    <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                      <Play className="w-3 h-3 text-white fill-white" />
                      <span className="text-[10px] text-white font-medium uppercase">Video</span>
                    </div>
                    <img 
                      src={item.poster} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all duration-300">
                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Handles both Single Image and Album thumbnails
                  <div className="w-full h-full relative">
                      {/* Album Badge */}
                      {item.type === 'album' && (
                      <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                        <Layers className="w-3 h-3 text-white" />
                        <span className="text-[10px] text-white font-medium uppercase">{item.images?.length} Photos</span>
                      </div>
                    )}
                    
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Hover Text Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {item.type === 'video' && <Play className="text-white w-8 h-8 mb-2 mx-auto" />}
                    {item.type === 'album' && <Layers className="text-white w-8 h-8 mb-2 mx-auto" />}
                    {item.type === 'image' && <ZoomIn className="text-white w-8 h-8 mb-2 mx-auto" />}
                  </div>
                  
                  <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {item.title}
                  </p>
                  <span className="text-white/70 text-xs mt-1 uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                    {galleryCategories.find(c => c.id === item.category)?.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MODAL / LIGHTBOX --- */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <button 
                className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-8 w-8" />
              </button>

              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                // UPDATED LOGIC HERE: Checks for landscape orientation
                className={`relative w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center
                  ${selectedItem.type === 'video' 
                    ? (selectedItem.orientation === 'landscape' ? 'w-full max-w-5xl aspect-video' : 'max-w-[400px] aspect-[9/16]') 
                    : 'max-w-6xl h-[80vh]'}
                `}
                onClick={(e) => e.stopPropagation()} 
              >
                
                {/* --- VIDEO CONTENT --- */}
                {selectedItem.type === 'video' && (
                  <div className="relative w-full h-full group">
                    <video
                      ref={videoRef}
                      src={selectedItem.src}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      onClick={toggleVideoPlay}
                    />
                    {!isPlaying && (
                        <div className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/20" onClick={toggleVideoPlay}>
                          <img 
                             src={selectedItem.poster} 
                             alt="Poster"
                             className="absolute inset-0 w-full h-full object-cover -z-10 brightness-75"
                          />
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-white/30">
                             <Play className="w-8 h-8 text-white fill-white ml-1" />
                          </div>
                        </div>
                    )}
                    {/* Controls */}
                    {isPlaying && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-white">
                            <h3 className="font-bold">{selectedItem.title}</h3>
                          </div>
                          <div className="flex gap-3">
                            <button onClick={toggleMute} className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30">
                               {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <button onClick={toggleVideoPlay} className="p-2 bg-white text-black rounded-full hover:bg-white/90">
                               <Pause size={20} fill="black" />
                            </button>
                          </div>
                      </div>
                    )}
                  </div>
                )}

                {/* --- ALBUM CONTENT --- */}
                {selectedItem.type === 'album' && (
                  <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center">
                    
                    {/* Image */}
                    <motion.img 
                      key={currentImageIndex} // Key change triggers animation
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      src={selectedItem.images[currentImageIndex]} 
                      alt={`Slide ${currentImageIndex}`}
                      className="max-w-full max-h-full object-contain"
                    />

                    {/* Left Arrow */}
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    {/* Right Arrow */}
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Counter & Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                        <div className="flex justify-between items-end">
                          <div>
                             <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                             <p className="text-white/70 text-sm">{galleryCategories.find(c => c.id === selectedItem.category)?.name}</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono">
                            {currentImageIndex + 1} / {selectedItem.images.length}
                          </div>
                        </div>
                    </div>
                  </div>
                )}

                {/* --- SINGLE IMAGE CONTENT --- */}
                {selectedItem.type === 'image' && (
                  <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center">
                    <img 
                      src={selectedItem.src} 
                      alt={selectedItem.title}
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-white text-xl font-bold">{selectedItem.title}</h3>
                        <p className="text-white/80 text-sm mt-1">
                            Category: {galleryCategories.find(c => c.id === selectedItem.category)?.name}
                        </p>
                    </div>
                  </div>
                )}

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-16 text-center border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            © Phoenix Computers Gallery Archive
          </p>
        </div>
      </div>
    </main>
  );
};

export default Gallery;