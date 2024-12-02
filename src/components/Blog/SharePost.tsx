import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const SharePost = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        aria-label="social-share"
        className="bg-[#014363] dark:bg-gray-dark mb-3 inline-flex h-9 w-9 items-center justify-center rounded-sm text-white duration-300 hover:bg-primary hover:text-[#EC8618] dark:hover:bg-primary sm:ml-3"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.x.com/"
        target="_blank"
        aria-label="social-share"
        className="bg-[#014363] dark:bg-gray-dark mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-sm text-white duration-300 hover:bg-primary hover:text-[#EC8618] dark:hover:bg-primary"
      >
        <FaSquareXTwitter />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        aria-label="social-share"
        className="bg-[#014363] dark:bg-gray-dark mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-sm text-white duration-300 hover:bg-primary hover:text-[#EC8618] dark:hover:bg-primary"
      >
        <FaFacebook />
      </a>
    </>
  );
};

export default SharePost;