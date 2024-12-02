const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-[#014363] mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-white duration-300 hover:bg-primary hover:text-[#EC8618]"
    >
      {text}
    </a>
  );
};

export default TagButton;
