
import { motion } from "framer-motion";
import WelcomeSection from "@/components/WelcomeSection";
import SocialCard from "@/components/SocialCard";
import BooksDialog from "@/components/BooksDialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <WelcomeSection />
        
        <div className="space-y-6">
          <SocialCard
            type="youtube"
            title="Canal no YouTube"
            description="Descubra diversos conteúdos gratutitos para expandir sua mente"
            link="https://youtube.com/@copyazivo?si=jXXvb9VJR6jmQvdY"
            delay={0.3}
          />
          
          <SocialCard
            type="instagram"
            title="Virtus Copy"
            description="Visite a minha empresa, a Virtus Copy. Se interessou por nossos serviços? Contrate a gente pelo nosso site"
            link="https://www.instagram.com/virtus.copy/"
            delay={0.4}
          />
          
          <SocialCard
            type="email"
            title="Parcerias"
            description="Vamos fazer uma parceria? seja nosso parceiro!"
            link="contaparanegocios30@gmail.com"
            delay={0.5}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <BooksDialog />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
