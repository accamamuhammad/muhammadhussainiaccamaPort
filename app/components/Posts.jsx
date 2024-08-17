import Link from "next/link";

const Posts = () => {
  const PostStyling =
    "leading-6 cursor-pointer underline hover:decoration-secondaryText hover:decoration-2 underline-offset-4";

  return (
    <div className="w-full">
      <h1 className="text-xl mb-4 text-primaryText">Posts</h1>
      <ul className="gap-4 sm:gap-3.5 text-sm flex flex-col items-start justify-start">
        {/* Projects List */}

        <Link
          href="https://accamamuhammad.hashnode.dev/7-reasons-why-tailwindcss-outshines-traditional-css"
          target="_blank"
          className="text-TertiaryBg"
        >
          <li className="text-primaryText">
            30 07 2024 {""}
            <span className={PostStyling}>
              7 Reasons Why TailwindCSS Outshines Traditional CSS
            </span>
          </li>
        </Link>
        <Link
          href="https://accamamuhammad.hashnode.dev/5-projects-that-will-get-you-hired-as-a-developer?"
          target="_blank"
          className="text-TertiaryBg"
        >
          <li className="text-primaryText">
            17 08 2024 {""}
            <span className={PostStyling}>
              5 Projects That Will Get You Hired as a Developer
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Posts;
