import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    // Здесь будет логика отправки формы
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-gray mb-4">
            Обратная связь
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Остались вопросы? Заполните форму, и наши специалисты свяжутся с
            вами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Контактная информация */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                Контактная информация
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="Phone"
                    className="text-primary-orange"
                    size={20}
                  />
                  <div>
                    <p className="font-medium">Приёмная комиссия</p>
                    <p className="text-gray-600">+7 (863) 251-25-25</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary-orange" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@rsm-institute.ru</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon
                    name="MapPin"
                    className="text-primary-orange"
                    size={20}
                  />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600">
                      г. Ростов-на-Дону, пр. Мира, 10
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon
                    name="Clock"
                    className="text-primary-orange"
                    size={20}
                  />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                Мы в социальных сетях
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-primary-orange text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Icon name="Facebook" size={20} fallback="Share" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-red-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Icon name="Youtube" size={20} fallback="Play" />
                </a>
              </div>
            </div>
          </div>

          {/* Форма */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Сообщение *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary-orange hover:bg-primary-orange/90"
              >
                Отправить сообщение
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
