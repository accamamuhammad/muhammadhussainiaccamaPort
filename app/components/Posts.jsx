import Link from "next/link";

const Posts = (props) => {
  const PostStyling =
    "leading-6 cursor-pointer underline hover:decoration-secondaryText hover:decoration-2 underline-offset-4";

  return (
    <div className="w-full">
      <h1 className="text-xl mb-4 text-primaryText font-semibold">Posts</h1>
      <ul className="gap-4 sm:gap-3.5 text-sm flex flex-col items-start justify-start">
        {/* Projects List */}
        {props.data.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="text-TertiaryBg flex flex-row gap-5 items-center"
            >
              <li>{item.date}</li>
              <li className="text-primaryText">
                <span className={PostStyling}>{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
