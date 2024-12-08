import { PageTemplate } from "@/components/PageTemplate";

const Security = () => (
  <PageTemplate title="Безопасность">
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold">Защита данных</h2>
        <p className="mt-4">Мы используем современные технологии шифрования для защиты ваших персональных данных и финансовой информации.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Рекомендации по безопасности</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Никогда не сообщайте никому свои пароли и коды из SMS</li>
          <li>Используйте сложные пароли и регулярно меняйте их</li>
          <li>Не переходите по подозрительным ссылкам</li>
          <li>Установите антивирусное ПО на все устройства</li>
        </ul>
      </section>
    </div>
  </PageTemplate>
);

export default Security;