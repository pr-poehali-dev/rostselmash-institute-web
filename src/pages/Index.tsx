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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши программы
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Бакалавриат
              </h3>
              <p className="text-gray-600 mb-6">
                Получите фундаментальные знания и практические навыки
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 4 года обучения</li>
                <li>• Современные программы</li>
                <li>• Практические занятия</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                Магистратура
              </h3>
              <p className="text-gray-600 mb-6">
                Углубите знания и станьте экспертом в своей области
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 2 года обучения</li>
                <li>• Специализированные курсы</li>
                <li>• Исследовательская работа</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <VirtualTour />
      <ContactForm />
    </div>
  );
};

export default Index;
