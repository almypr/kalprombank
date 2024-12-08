import { PageTemplate } from "@/components/PageTemplate";

const CardB = () => (
  <PageTemplate title="Карта Б">
    <div className="space-y-4">
      <p>Бизнес-карта для предпринимателей:</p>
      <ul className="list-disc pl-6">
        <li>Бесплатное обслуживание расчетного счета</li>
        <li>Кэшбэк до 10% на бизнес-расходы</li>
        <li>Интеграция с 1С</li>
        <li>Корпоративные лимиты и контроль расходов</li>
      </ul>
    </div>
  </PageTemplate>
);

export default CardB;