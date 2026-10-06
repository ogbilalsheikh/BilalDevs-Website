import AboutPort from "../components/AboutPort";
import Feature from "../components/Feature";
import HeroPort from "../components/HeroPort"
import ProfessionalProfile from "../components/ProfessionalProfile";
import ServicePort from "../components/ServicePort";
import SkillPort from "../components/SkillPort";
import FormPort from "../components/FormPort";

const Portfolio = () => {
  return (
    <>
      <HeroPort />
      <AboutPort />
      <SkillPort />
      <ServicePort />
      <Feature />
      <ProfessionalProfile />
      <FormPort />
    </>
  );
};

export default Portfolio;