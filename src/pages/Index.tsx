import Programs from "@/components/Programs";
import ContactForm from "@/components/ContactForm";
import VirtualTour from "@/components/VirtualTour";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Добро пожаловать
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Откройте новые возможности вместе с нами
          </p>
        </div>
      </section>
      <Programs />
      <VirtualTour />
      <ContactForm />
    </div>
  );
};

export default Index;
