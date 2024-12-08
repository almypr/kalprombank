import { PageTemplate } from "@/components/PageTemplate";

const Terms = () => (
  <PageTemplate title="Условия обслуживания">
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold">Общие положения</h2>
        <p className="mt-4">Настоящие условия обслуживания определяют порядок предоставления банковских услуг клиентам Калпромбанка.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Тарифы и комиссии</h2>
        <p className="mt-4">Все операции осуществляются в соответствии с действующими тарифами банка. Банк оставляет за собой право изменять тарифы с предварительным уведомлением клиентов.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Ответственность сторон</h2>
        <p className="mt-4">Банк и клиент несут ответственность за неисполнение или ненадлежащее исполнение своих обязательств в соответствии с действующим законодательством.</p>
      </section>
    </div>
  </PageTemplate>
);

export default Terms;