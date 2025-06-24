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

const Products = () => {
  const products = [
    {
      category: "Бетон",
      items: [
        {
          name: "Бетон М200",
          description: "Для фундаментов и стяжек",
          price: "от 3500 руб/м³",
        },
        {
          name: "Бетон М300",
          description: "Универсальный строительный бетон",
          price: "от 3800 руб/м³",
        },
        {
          name: "Бетон М400",
          description: "Для высоконагруженных конструкций",
          price: "от 4200 руб/м³",
        },
      ],
    },
    {
      category: "Строительные смеси",
      items: [
        {
          name: "Пескобетон М300",
          description: "Готовая сухая смесь",
          price: "от 180 руб/мешок",
        },
        {
          name: "Штукатурка цементная",
          description: "Для внутренних и наружных работ",
          price: "от 220 руб/мешок",
        },
        {
          name: "Клей для плитки",
          description: "Высокопрочный клеевой состав",
          price: "от 350 руб/мешок",
        },
      ],
    },
    {
      category: "Нерудные материалы",
      items: [
        {
          name: "Песок строительный",
          description: "Фракция 0-5 мм",
          price: "от 800 руб/м³",
        },
        {
          name: "Щебень гранитный",
          description: "Фракции 5-20, 20-40 мм",
          price: "от 1200 руб/м³",
        },
        {
          name: "Керамзит",
          description: "Легкий заполнитель для бетона",
          price: "от 1800 руб/м³",
        },
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
              Наша продукция
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Широкий ассортимент качественных строительных материалов для
              реализации проектов любой сложности
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((product, productIndex) => (
                  <Card
                    key={productIndex}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-montserrat">
                        {product.name}
                      </CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-600">
                          {product.price}
                        </span>
                        <Button>
                          <Icon
                            name="ShoppingCart"
                            size={16}
                            className="mr-2"
                          />
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Гарантия качества
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Вся наша продукция соответствует ГОСТ и имеет необходимые
              сертификаты качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сертификация</h3>
              <p className="text-gray-600">
                Все материалы сертифицированы по ГОСТ
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Контроль качества</h3>
              <p className="text-gray-600">
                Многоступенчатый контроль на всех этапах
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600">Полная гарантия на всю продукцию</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
