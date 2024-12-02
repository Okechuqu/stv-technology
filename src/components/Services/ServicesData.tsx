import { Feature } from "../../types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <img
        src="/images/features/it.jpeg"
        className="rounded-lg w-full feature-img"
      />
    ),
    title: "Information Technology",
    paragraph:
      "We deliver full-spectrum information technology solutions to third-party clients, covering consulting, implementation, and dedicated support services, tailored to address their unique business challenges and ensure seamless operational success.",
  },
  {
    id: 2,
    icon: (
      <img
        src="/images/features/hi-tech-security.jpeg"
        className="rounded-lg w-full feature-img"
      />
    ),
    title: "Hi-Tech Security",
    paragraph:
      "We take pride in offering unmatched professional service, utilizing cutting-edge technology and fully equipped capabilities. Our commitment to excellence sets industry standards, ensuring clients receive superior quality that competitors rarely achieve.",
  },
  {
    id: 3,
    icon: (
      <img
        src="/images/features/solar.jpeg"
        className="rounded-lg w-full feature-img"
      />
    ),
    title: "Renewable Power (Solar)",
    paragraph:
      "We address the lack of reliable electricity providers in Nigeria, offering you the choice of a provider fully committed to transforming power generation. Experience dependable, innovative energy solutions with STV Technology.",
  },
  {
    id: 4,
    icon: (
      <img
        src="/images/features/construction.jpeg"
        className="rounded-lg w-full feature-img"
      />
    ),
    title: "Construction Project Management",
    paragraph:
      "No matter the location or type of your construction project, we promise a complete start-to-finish package. This enables you to focus on your expertise while ensuring timely and budget-friendly project completion.",
  },
  {
    id: 5,
    icon: (
      <img
        src="/images/features/mech-elect.jpeg"
        className="rounded-lg w-full feature-img"
      />
    ),
    title: "Mechanical and Electrical Engineering",
    paragraph:
      "Our expertise in mechanical and electrical engineering encompasses innovative design, installation, and maintenance solutions. We ensure efficiency, reliability, and performance across all projects, delivering tailored services to meet diverse client needs in various industries.",
  },
  {
    id: 6,
    icon: (
      <img
        src="/images/features/web-dev.jpeg"
        className="rounded-lg w-full feature-img"
      />
    ),
    title: "Website Design & Development",
    paragraph:
      "We specialize in web design and development, creating responsive, user-friendly websites tailored to your needs. From concept to launch, our services ensure visually appealing designs, seamless functionality, and a strong online presence for your business.",
  },
];
export default featuresData;
