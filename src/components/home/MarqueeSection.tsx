const updates = [
  "🎓 New Batch Starting: Python Full Stack - Jan 2024",
  "💼 100% Placement Assistance Available",
  "🏆 Congratulations to our students placed at TCS, Infosys, Wipro!",
  "📚 New Course Added: AI & Machine Learning",
  "🎉 Early Bird Discount: 20% off on all courses",
  "⭐ Rated #1 IT Training Institute in Kolhapur",
];

const MarqueeSection = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...updates, ...updates].map((update, index) => (
          <span key={index} className="mx-8 text-sm font-medium">
            {update}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
