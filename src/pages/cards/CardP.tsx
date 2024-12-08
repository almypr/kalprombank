import { PageTemplate } from "@/components/PageTemplate";

const CardP = () => (
  <PageTemplate title="Карта П">
    <div className="space-y-8">
      <img 
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
        alt="Премиальная карта П"
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
      />
      <div className="space-y-4">
        <p>Премиальная карта с особыми привилегиями:</p>
        <ul className="list-disc pl-6">
          <li>Повышенный кэшбэк до 5%</li>
          <li>Доступ в бизнес-залы аэропортов</li>
          <li>Консьерж-сервис 24/7</li>
          <li>Страхование путешествий</li>
        </ul>
      </div>
    </div>
  </PageTemplate>
);

export default CardP;