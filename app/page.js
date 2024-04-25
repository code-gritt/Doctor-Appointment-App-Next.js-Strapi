import ContactForm from "./_components/ContactForm/ContactForm";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import VisionAIsolutions from "./_components/Process/VisionAIsolutions";
import Searchbar from "./_components/Searchbar/Searchbar";

export default function Home() {
  return (
    <div>
      <Hero />
      <hr />
      <Searchbar />
      <hr />
      <VisionAIsolutions />
      <ContactForm />
      <Footer />
    </div>
  );
}
