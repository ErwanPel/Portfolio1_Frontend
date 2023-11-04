import { useSelector } from "react-redux";
import { RootState } from "../features/store";

type ImageTechnoProps = {
  source: string;
  alt: string;
  color: string;
  name: string;
};

export default function ImageTechno({
  source,
  alt,
  color,
  name,
}: ImageTechnoProps) {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${color} w-[30px] flex items-center justify-center rounded-3xl  `}
      >
        <img width={30} src={source} alt={alt} className="object-cover " />
      </div>
      <p
        className={
          theme === "dark"
            ? "text-sm  text-blTextMin w-[50px] text-center mt-1"
            : "text-sm text-lgTextMin  w-[50px] text-center mt-1"
        }
      >
        {name}
      </p>
    </div>
  );
}
