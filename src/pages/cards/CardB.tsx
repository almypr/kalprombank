import { PageTemplate } from "@/components/PageTemplate";

const CardB = () => (
  <PageTemplate title="Карта Б">
    <div className="space-y-8">
      <img 
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        alt="Бизнес-карта Б"
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
      />
      <div className="space-y-4">
        <p>Бизнес-карта для предпринимателей:</p>
        <ul className="list-disc pl-6">
          <li>Бесплатное обслуживание расчетного счета</li>
          <li>Кэшбэк до 10% на бизнес-расходы</li>
          <li>Интеграция с 1С</li>
          <li>Корпоративные лимиты и контроль расходов</li>
        </ul>
      </div>
    </div>
  </PageTemplate>
);

export default CardB;