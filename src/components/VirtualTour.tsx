import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VirtualTour = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      title: "Главный корпус",
      description:
        "Современные аудитории и лаборатории с новейшим оборудованием",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      features: [
        "10 современных аудиторий",
        "Конференц-зал на 200 мест",
        "Студенческое кафе",
      ],
    },
    {
      title: "Лаборатории",
      description: "Высокотехнологичные лаборатории для практических занятий",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      features: ["Роботехника", "3D-моделирование", "Испытательные стенды"],
    },
    {
      title: "Библиотека",
      description: "Современная библиотека с электронными ресурсами",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      features: ["50,000+ книг", "Электронная база", "Читальные залы"],
    },
    {
      title: "Общежитие",
      description: "Комфортабельное общежитие для иногородних студентов",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
      features: ["2-местные комнаты", "Wi-Fi", "Прачечная и кухня"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-gray mb-4">
            Виртуальная экскурсия
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с нашим современным кампусом, не выходя из дома
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Список локаций */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Выберите локацию
            </h3>
            <div className="space-y-2">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLocation(index)}
                  className={`w-full p-4 text-left rounded-lg transition-all ${
                    activeLocation === index
                      ? "bg-primary-orange text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name={
                        index === 0
                          ? "Building"
                          : index === 1
                            ? "Cpu"
                            : index === 2
                              ? "BookOpen"
                              : "Home"
                      }
                      size={20}
                    />
                    <div>
                      <h4 className="font-medium">{location.title}</h4>
                      <p
                        className={`text-sm ${
                          activeLocation === index
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {location.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              {/* Изображение */}
              <div className="relative">
                <img
                  src={locations[activeLocation].image}
                  alt={locations[activeLocation].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white/90 hover:bg-white"
                  >
                    <Icon name="Play" size={20} className="mr-2" />
                    Начать экскурсию
                  </Button>
                </div>
              </div>

              {/* Информация */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark-gray mb-3">
                  {locations[activeLocation].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {locations[activeLocation].description}
                </p>

                {/* Особенности */}
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">
                    Особенности:
                  </h4>
                  <ul className="space-y-1">
                    {locations[activeLocation].features.map(
                      (feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon
                            name="Check"
                            size={16}
                            className="text-primary-orange"
                          />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Дополнительные кнопки */}
                <div className="flex space-x-3 mt-6">
                  <Button variant="outline" className="flex-1">
                    <Icon name="Camera" size={16} className="mr-2" />
                    360° обзор
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Map" size={16} className="mr-2" />
                    На карте
                  </Button>
                </div>
              </div>
            </div>

            {/* Навигация */}
            <div className="flex justify-between items-center mt-4">
              <Button
                variant="ghost"
                onClick={() =>
                  setActiveLocation(Math.max(0, activeLocation - 1))
                }
                disabled={activeLocation === 0}
              >
                <Icon name="ChevronLeft" size={16} className="mr-1" />
                Предыдущая
              </Button>

              <div className="flex space-x-2">
                {locations.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      activeLocation === index
                        ? "bg-primary-orange"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                onClick={() =>
                  setActiveLocation(
                    Math.min(locations.length - 1, activeLocation + 1),
                  )
                }
                disabled={activeLocation === locations.length - 1}
              >
                Следующая
                <Icon name="ChevronRight" size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
