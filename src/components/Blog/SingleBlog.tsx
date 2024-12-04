import { Img } from "react-image";
import { Blog } from "../../types/blog";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { path, title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two  group relative overflow-hidden rounded-sm bg-[#1D2430] shadow-one duration-300"
        data-wow-delay=".1s"
      >
        <Link
          to={path}
          className="relative block aspect-[37/22] w-full"
          target="_blank"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-[#024361] px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Img src={image} alt="image" className="w-full h-full object-cover" />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              to={path}
              className="mb-4 block text-xl font-bold text-white hover:text-[#EC8618] sm:text-2xl"
              target="_blank"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Img src={author.image} alt="author" />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-[#EC8618]">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-[#EC8618]">Date</h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
