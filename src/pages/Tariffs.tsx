import { PageTemplate } from "@/components/PageTemplate";

const Tariffs = () => (
  <PageTemplate title="Тарифы">
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold">Расчетно-кассовое обслуживание</h2>
        <div className="mt-4 space-y-2">
          <p>Открытие счета - Бесплатно</p>
          <p>Ведение счета - 0 ₽/мес</p>
          <p>Внутрибанковские переводы - Бесплатно</p>
          <p>Межбанковские переводы - от 20 ₽</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Кредитование</h2>
        <div className="mt-4 space-y-2">
          <p>Потребительский кредит - от 5.9% годовых</p>
          <p>Ипотека - от 4.5% годовых</p>
          <p>Автокредит - от 3.9% годовых</p>
        </div>
      </section>
    </div>
  </PageTemplate>
);

export default Tariffs;