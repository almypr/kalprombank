import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const OpenAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    passport: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка на открытие счета отправлена");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-2xl px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Открытие счета</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                ФИО
              </label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Телефон
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="passport" className="block text-sm font-medium mb-2">
                Серия и номер паспорта
              </label>
              <Input
                id="passport"
                value={formData.passport}
                onChange={(e) =>
                  setFormData({ ...formData, passport: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Отправить заявку
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OpenAccount;