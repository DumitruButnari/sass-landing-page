import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div className={"container py-10"}>
        <div
          className={"flex justify-between items-center w-full max-md:flex-col"}
        >
          <p className={"small-compact opacity-80 flex-1"}>
            Copyright,{" "}
            <a
              href="https://dbwebstudio.me"
              className={
                "underline hover:text-p1 hover:no-underline transition-all duration-500"
              }
            >
              dbwebstudio.me
            </a>
          </p>
          <div
            className={
              "flex items-center justify-center small-compact max-md:mt-1"
            }
          >
            <p
              className={
                "cursor-pointer legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1"
              }
            >
              Privacy Policy
            </p>
            <p
              className={
                "cursor-pointer text-p5 transition-all duration-500 hover:text-p1"
              }
            >
              Term of use
            </p>
          </div>
          <ul
            className={
              "flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end"
            }
          >
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className={"social-icon"} target={"_blank"}>
                  <img
                    src={icon}
                    alt={title}
                    className={"size-6 object-fill"}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
