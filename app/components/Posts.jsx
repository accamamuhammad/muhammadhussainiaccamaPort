import Link from "next/link";

const Posts = (props) => {
  const PostStyling =
    "leading-6 cursor-pointer underline hover:decoration-secondaryText hover:decoration-2 underline-offset-4";

  return (
    <div className="w-full">
      <h1 className="text-xl mb-4 text-primaryText">Posts</h1>
      <ul className="gap-4 sm:gap-3.5 text-sm flex flex-col items-start justify-start">
        {/* Projects List */}
        {props.data.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="text-TertiaryBg"
            >
              <li className="text-primaryText">
                {item.date} {""}
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
