import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "15+", label: "лет на рынке", icon: "Calendar" },
    { number: "5000+", label: "выполненных проектов", icon: "Building" },
    { number: "50+", label: "сотрудников", icon: "Users" },
    { number: "100%", label: "довольных клиентов", icon: "Heart" },
  ];

  const values = [
    {
      icon: "Shield",
      title: "Надежность",
      description:
        "Мы гарантируем качество продукции и соблюдение всех договорных обязательств",
    },
    {
      icon: "Award",
      title: "Качество",
      description:
        "Используем только проверенные технологии и соответствуем всем стандартам",
    },
    {
      icon: "Clock",
      title: "Пунктуальность",
      description: "Четко соблюдаем сроки поставок и выполнения всех работ",
    },
    {
      icon: "Users",
      title: "Профессионализм",
      description:
        "Наша команда — это опытные специалисты с многолетним стажем",
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
              О компании БетонСтрой
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Мы создаем прочный фундамент для ваших проектов уже более 15 лет
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-6">
                Наша история
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Компания БетонСтрой была основана в 2009 году группой
                энтузиастов, которые поставили перед собой цель — обеспечить
                строительную отрасль качественными материалами по справедливым
                ценам.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                За годы работы мы выросли от небольшого производства до крупного
                предприятия с собственным заводом, автопарком и складскими
                комплексами.
              </p>
              <p className="text-lg text-gray-700">
                Сегодня мы — надежный партнер для сотен строительных компаний и
                частных застройщиков по всему региону.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="О компании"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Цифры говорят сами за себя
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={stat.icon}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <div className="text-3xl font-montserrat font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-gray-600">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={value.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            Наша миссия
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Создавать качественные строительные материалы, которые служат
            основой для надежных и долговечных сооружений. Мы стремимся быть
            партнером, на которого можно положиться в любой ситуации.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
