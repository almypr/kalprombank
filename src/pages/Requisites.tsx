import { PageTemplate } from "@/components/PageTemplate";

const Requisites = () => (
  <PageTemplate title="Реквизиты">
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="font-bold">Полное наименование</h2>
          <p>Акционерное общество "Калпромбанк"</p>
        </div>
        <div>
          <h2 className="font-bold">Сокращенное наименование</h2>
          <p>АО "Калпромбанк"</p>
        </div>
        <div>
          <h2 className="font-bold">ИНН</h2>
          <p>7707083893</p>
        </div>
        <div>
          <h2 className="font-bold">КПП</h2>
          <p>773601001</p>
        </div>
        <div>
          <h2 className="font-bold">ОГРН</h2>
          <p>1027700132195</p>
        </div>
        <div>
          <h2 className="font-bold">ОКПО</h2>
          <p>00032537</p>
        </div>
      </div>
    </div>
  </PageTemplate>
);

export default Requisites;