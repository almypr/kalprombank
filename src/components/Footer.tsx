import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-bank-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">О банке</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-bank-primary">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-bank-primary">
                  Карьера
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-bank-primary">
                  Новости
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/requisites" className="hover:text-bank-primary">
                  Реквизиты
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-bank-primary">
                  Условия
                </Link>
              </li>
              <li>
                <Link to="/tariffs" className="hover:text-bank-primary">
                  Тарифы
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Безопасность</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/security" className="hover:text-bank-primary">
                  Безопасность
                </Link>
              </li>
              <li>
                <Link to="/disclosure" className="hover:text-bank-primary">
                  Раскрытие информации
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Мы в соцсетях</h3>
            <div className="space-y-4">
              <iframe
                src="https://t.me/kalprombank/embed"
                style={{
                  border: 0,
                  overflow: "hidden",
                  scrolling: "no",
                  width: "100%",
                  height: "500px"
                }}
                title="Telegram Channel"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2024 Калпромбанк. Все права защищены.</p>
          <p className="mt-2">
            Внимание: Данный сайт является сатирическим проектом и не представляет реальный банк.
            Вся информация на сайте предназначена исключительно для развлекательных целей.
          </p>
        </div>
      </div>
    </footer>
  );
};