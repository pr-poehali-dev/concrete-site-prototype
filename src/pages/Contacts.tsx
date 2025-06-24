import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефоны",
      details: ["+7 (495) 123-45-67", "+7 (495) 123-45-68"],
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["info@betonstroj.ru", "sales@betonstroj.ru"],
    },
    {
      icon: "MapPin",
      title: "Адрес",
      details: ["г. Москва, ул. Промышленная, д. 15", "Производственная база"],
    },
    {
      icon: "Clock",
      title: "Режим работы",
      details: ["Пн-Пт: 8:00 - 18:00", "Сб: 9:00 - 15:00, Вс: выходной"],
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
              Контакты
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить
              на ваши вопросы
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={contact.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl font-montserrat">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">
                  Отправить сообщение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Имя *
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон *
                      </label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Тема обращения
                    </label>
                    <Input placeholder="О чем хотите спросить?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение *
                    </label>
                    <Textarea
                      placeholder="Опишите ваш запрос подробнее..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">
                  Наше расположение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                    <p>Карта расположения</p>
                    <p className="text-sm">
                      г. Москва, ул. Промышленная, д. 15
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="Car" size={16} className="text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      Парковка для клиентов
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Bus" size={16} className="text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      Остановка «Промышленная» (200м)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Navigation"
                      size={16}
                      className="text-blue-600 mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      15 минут от МКАД
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Нужна срочная консультация?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Позвоните нам прямо сейчас или закажите обратный звонок
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="PhoneCall" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
