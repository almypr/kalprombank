import { PageTemplate } from "@/components/PageTemplate";

const CardK = () => (
  <PageTemplate title="Карта К">
    <div className="space-y-8">
      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        alt="Классическая карта К"
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
      />
      <div className="space-y-4">
        <p>Классическая карта для повседневных покупок с выгодными условиями:</p>
        <ul className="list-disc pl-6">
          <li>Бесплатное обслуживание</li>
          <li>Кэшбэк до 3% на все покупки</li>
          <li>Бесплатное снятие наличных в банкоматах банка</li>
          <li>Мобильный банк без абонентской платы</li>
        </ul>
      </div>
    </div>
  </PageTemplate>
);

export default CardK;