import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Truck",
      title: "Производство бетона",
      description:
        "Производство бетона всех марок с использованием современного оборудования",
      features: [
        "Марки от М100 до М500",
        "Добавки и пластификаторы",
        "Контроль качества",
        "Быстрое производство",
      ],
    },
    {
      icon: "Package",
      title: "Поставка материалов",
      description: "Комплексная поставка строительных материалов на объекты",
      features: [
        "Широкий ассортимент",
        "Складские запасы",
        "Гибкие условия",
        "Оптовые скидки",
      ],
    },
    {
      icon: "Navigation",
      title: "Грузоперевозки",
      description: "Доставка строительных материалов собственным автопарком",
      features: [
        "Собственный автопарк",
        "Доставка по графику",
        "Опытные водители",
        "Страхование грузов",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-montserrat font-bold mb-4">
              Наши услуги
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Полный спектр услуг для строительной отрасли — от производства до
              доставки материалов
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-2xl font-montserrat">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-600 mr-2"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Узнать подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-lg text-gray-600">
              Простой и понятный процесс сотрудничества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Заявка",
                description: "Оставляете заявку любым удобным способом",
              },
              {
                step: "02",
                title: "Расчет",
                description: "Рассчитываем стоимость и объемы материалов",
              },
              {
                step: "03",
                title: "Договор",
                description: "Заключаем договор на поставку",
              },
              {
                step: "04",
                title: "Доставка",
                description: "Доставляем материалы точно в срок",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут подобрать оптимальное решение для вашего
            проекта
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
