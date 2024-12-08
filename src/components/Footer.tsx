import { Phone, Mail, MapPin } from "lucide-react";

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
                <span>г. Москва, ул. Банковская, 1</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">О банке</h3>
            <ul className="space-y-2">
              <li>Информация</li>
              <li>Новости</li>
              <li>Карьера</li>
              <li>Реквизиты</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Документы</h3>
            <ul className="space-y-2">
              <li>Условия обслуживания</li>
              <li>Тарифы</li>
              <li>Раскрытие информации</li>
              <li>Безопасность</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>© 2024 Калпромбанк. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};