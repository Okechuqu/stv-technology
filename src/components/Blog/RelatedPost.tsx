import { Img } from "react-image";
import { Link } from "react-router-dom";

const RelatedPost = ({
  image,
  slug,
  title,
}: {
  image: string;
  slug: string;
  title: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
          <Img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="w-full">
        <h5>
          <Link
            to={slug}
            className="mb-[6px] block text-base font-medium leading-snug hover:text-[#EC8618] dark:text-white dark:hover:text-[#EC8618]"
          >
            {title}
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default RelatedPost;
