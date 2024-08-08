import LuxuryContentDesktop from "./luxury-content-desktop";
import LuxuryContentMobile from "./luxury-content-mobile";

const LuxuryFootages = () => {
  return (
    <div className="container">
      <h3 className="font-signature text-6xl text-center lg:text-start text-primary-400 mb-8">
        Luxury Footages
      </h3>

      <div className="hidden lg:block">
        <LuxuryContentDesktop />
      </div>
      <div className="lg:hidden">
        <LuxuryContentMobile />
      </div>
    </div>
  );
};

export default LuxuryFootages;
