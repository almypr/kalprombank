import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const PageTemplate = ({ title, children }: PageTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
          <div className="prose max-w-none">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};