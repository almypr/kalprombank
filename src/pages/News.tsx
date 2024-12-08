import { PageTemplate } from "@/components/PageTemplate";

const News = () => (
  <PageTemplate title="Новости">
    <div className="space-y-8">
      <article className="border-b pb-6">
        <h2 className="text-xl font-bold">Новые условия по кредитам для бизнеса</h2>
        <p className="text-gray-600 mt-2">15 марта 2024</p>
        <p className="mt-4">Калпромбанк запускает новую программу кредитования малого и среднего бизнеса с пониженной процентной ставкой.</p>
      </article>
      <article className="border-b pb-6">
        <h2 className="text-xl font-bold">Обновление мобильного приложения</h2>
        <p className="text-gray-600 mt-2">10 марта 2024</p>
        <p className="mt-4">Вышло обновление мобильного приложения с новым дизайном и улучшенной производительностью.</p>
      </article>
    </div>
  </PageTemplate>
);

export default News;