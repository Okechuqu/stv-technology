import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleService";
import featuresData from "./ServicesData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-5 ">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="We offer a variety of services, delivering them both professionally and creatively, tailored to meet diverse needs and expectations."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
