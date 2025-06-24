import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import ContactForm from "@/components/ContactForm";
import VirtualTour from "@/components/VirtualTour";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Programs />
      <VirtualTour />
      <ContactForm />
    </div>
  );
};

export default Index;
