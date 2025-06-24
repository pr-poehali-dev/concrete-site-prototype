import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/products", label: "Продукция" },
    { path: "/services", label: "Услуги" },
    { path: "/about", label: "О нас" },
    { path: "/contacts", label: "Контакты" },
    { path: "/certificates", label: "Сертификаты" },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={20} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              БетонСтрой
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-4"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
