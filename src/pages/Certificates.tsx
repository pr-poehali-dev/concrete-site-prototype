import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Certificates = () => {
  const certificates = [
    {
      title: "ISO 9001:2015",
      description: "Система менеджмента качества",
      date: "Действителен до: 12.2025",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    },
    {
      title: "ГОСТ 7473-2010",
      description: "Смеси бетонные. Технические условия",
      date: "Действителен до: 08.2025",
      image:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=300&h=400&fit=crop",
    },
    {
      title: "СТО 36554501-006-2006",
      description: "Бетоны. Правила контроля и оценки качества",
      date: "Действителен до: 03.2026",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=400&fit=crop",
    },
    {
      title: "ТР ТС 014/2011",
      description: "Безопасность автомобильных дорог",
      date: "Действителен до: 11.2025",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop",
    },
    {
      title: "ГОСТ 26633-2012",
      description: "Бетоны тяжелые и мелкозернистые",
      date: "Действителен до: 06.2026",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=400&fit=crop",
    },
    {
      title: "ISO 14001:2015",
      description: "Система экологического менеджмента",
      date: "Действителен до: 09.2025",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=400&fit=crop",
    },
  ];

  const standards = [
    {
      icon: "Shield",
      title: "ГОСТ",
      description: "Соответствие государственным стандартам качества",
    },
    {
      icon: "Award",
      title: "ISO",
      description: "Международные стандарты качества и экологии",
    },
    {
      icon: "CheckCircle",
      title: "ТР ТС",
      description: "Технические регламенты Таможенного союза",
    },
    {
      icon: "FileCheck",
      title: "СТО",
      description: "Стандарты организации для внутреннего контроля",
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
              Сертификаты и лицензии
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Вся наша деятельность сертифицирована и соответствует высочайшим
              стандартам качества
            </p>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Стандарты качества
            </h2>
            <p className="text-lg text-gray-600">
              Мы работаем в соответствии с российскими и международными
              стандартами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={standard.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl font-montserrat">
                    {standard.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Наши сертификаты
            </h2>
            <p className="text-lg text-gray-600">
              Документы, подтверждающие качество нашей продукции и услуг
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {certificate.description}
                  </p>
                  <p className="text-blue-600 text-sm font-medium">
                    {certificate.date}
                  </p>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">
              Гарантия качества
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Все наши сертификаты регулярно обновляются. Мы проходим плановые и
              внеплановые проверки контролирующих органов, подтверждая высокий
              уровень качества продукции.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">сертифицированная продукция</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">действующих сертификатов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">контроль качества</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificates;
