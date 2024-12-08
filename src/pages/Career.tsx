import { PageTemplate } from "@/components/PageTemplate";

const Career = () => (
  <PageTemplate title="Карьера">
    <div className="space-y-6">
      <p>Калпромбанк - это команда профессионалов, нацеленных на результат. Мы постоянно ищем талантливых специалистов для развития нашего банка.</p>
      <h2 className="text-2xl font-bold">Открытые вакансии</h2>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Менеджер по работе с клиентами</h3>
          <p className="text-gray-600 mt-2">Требуется специалист с опытом работы в банковской сфере</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Кредитный аналитик</h3>
          <p className="text-gray-600 mt-2">Опыт работы в оценке кредитных рисков от 2 лет</p>
        </div>
      </div>
    </div>
  </PageTemplate>
);

export default Career;