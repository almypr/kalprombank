import { PageTemplate } from "@/components/PageTemplate";

const Disclosure = () => (
  <PageTemplate title="Раскрытие информации">
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold">Финансовая отчетность</h2>
        <p className="mt-4">Банк регулярно публикует финансовую отчетность в соответствии с требованиями законодательства РФ.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Структура собственности</h2>
        <p className="mt-4">Информация о конечных бенефициарах и структуре собственности банка доступна в соответствии с требованиями прозрачности.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Лицензии</h2>
        <p className="mt-4">Банк осуществляет свою деятельность на основании лицензий Банка России.</p>
      </section>
    </div>
  </PageTemplate>
);

export default Disclosure;