import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./BlogData";

const Blog = () => {
  return (
    <>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
      <section id="blog" className="bg-gray-light dark:bg-bg-color-dark py-5 ">
        <div className="container">
          <SectionTitle
            title="Latest Blogs"
            paragraph="Discover the latest blogs, showcasing diverse topics, insightful ideas, and valuable knowledge to keep you informed, inspired, and engaged."
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
