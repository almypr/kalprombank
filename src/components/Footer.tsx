import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-bank-primary text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>8 800 100-00-00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@kalprombank.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>улица Пи 48, г. Алматы</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">О банке</h3>
            <ul className="space-y-2">
              <li><Link to="/information" className="hover:underline">Информация</Link></li>
              <li><Link to="/news" className="hover:underline">Новости</Link></li>
              <li><Link to="/career" className="hover:underline">Карьера</Link></li>
              <li><Link to="/requisites" className="hover:underline">Реквизиты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Документы</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:underline">Условия обслуживания</Link></li>
              <li><Link to="/tariffs" className="hover:underline">Тарифы</Link></li>
              <li><Link to="/disclosure" className="hover:underline">Раскрытие информации</Link></li>
              <li><Link to="/security" className="hover:underline">Безопасность</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center space-y-4">
          <p>© 2024 Калпромбанк. Все права защищены.</p>
          <p className="text-sm text-gray-400">
            Внимание: Данный сайт является сатирическим проектом и не представляет реальный банк. 
            Вся информация на сайте предназначена исключительно для развлекательных целей.
          </p>
        </div>
      </div>
    </footer>
  );
};
