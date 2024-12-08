import { PageTemplate } from "@/components/PageTemplate";

const CardD = () => (
  <PageTemplate title="Карта Д">
    <div className="space-y-4">
      <p>Дебетовая карта с высоким кэшбэком:</p>
      <ul className="list-disc pl-6">
        <li>Кэшбэк до 7% в выбранных категориях</li>
        <li>Начисление процентов на остаток</li>
        <li>Бесплатные переводы</li>
        <li>Снятие наличных без комиссии</li>
      </ul>
    </div>
  </PageTemplate>
);

export default CardD;