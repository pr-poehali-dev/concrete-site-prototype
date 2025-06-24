import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: "Truck",
      title: "Производство бетона",
      description: "Высококачественный бетон всех марок с доставкой по городу",
    },
    {
      icon: "Package",
      title: "Строительные материалы",
      description: "Широкий ассортимент материалов для строительства",
    },
    {
      icon: "Shield",
      title: "Грузоперевозки",
      description: "Надежная доставка строительных материалов",
    },
  ];

  const advantages = [
    { number: "15+", text: "лет опыта" },
    { number: "5000+", text: "проектов" },
    { number: "24/7", text: "поддержка" },
    { number: "100%", text: "качество" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-montserrat font-bold mb-6 leading-tight">
                Надежные решения для строительства
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Производство качественного бетона, поставка строительных
                материалов и грузоперевозки. Ваш надежный партнер с 2009 года.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link to="/products" className="flex items-center">
                    <Icon name="ArrowRight" size={20} className="mr-2" />
                    Наша продукция
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                  alt="Строительство"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для успешной реализации ваших строительных
              проектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl font-montserrat">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-montserrat font-bold text-blue-600 mb-2">
                  {advantage.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {advantage.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-4">
            Готовы начать проект?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и расчета стоимости ваших
            строительных задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contacts" className="flex items-center">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-300 hover:bg-gray-800"
            >
              <Link to="/services" className="flex items-center">
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
