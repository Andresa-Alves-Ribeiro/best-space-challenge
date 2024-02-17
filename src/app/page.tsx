import Footer from "@/components/Footer/footer";
import Form from "@/components/Form/form";
import Header from "@/components/Header/header";
import { Hero } from "@/components/Hero/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Form />
      <Footer />
    </main>
  );
}
