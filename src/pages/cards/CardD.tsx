import { PageTemplate } from "@/components/PageTemplate";

const CardD = () => (
  <PageTemplate title="Карта Д">
    <div className="space-y-8">
      <img 
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        alt="Дебетовая карта Д"
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
      />
      <div className="space-y-4">
        <p>Дебетовая карта с высоким кэшбэком:</p>
        <ul className="list-disc pl-6">
          <li>Кэшбэк до 7% в выбранных категориях</li>
          <li>Начисление процентов на остаток</li>
          <li>Бесплатные переводы</li>
          <li>Снятие наличных без комиссии</li>
        </ul>
      </div>
    </div>
  </PageTemplate>
);

export default CardD;