const companies = [
  "TCS",
  "Infosys",
  "Wipro",
  "Tech Mahindra",
  "Capgemini",
  "Accenture",
  "Cognizant",
  "HCL",
];

const TrustedBySection = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          Our students work at leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
