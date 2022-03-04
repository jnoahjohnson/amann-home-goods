import { useNavigate } from "remix";

export default function LinkCard({
  title,
  link,
  img,
}: {
  title: string;
  link: string;
  img: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="relative rounded p-4 flex items-center justify-center h-[100px] md:h-[165px] overflow-hiddden"
    >
      <p className="relative z-30 text-white font-bold text-3xl">{title}</p>
      <div className="z-20 w-full h-full absolute bg-gray-800 opacity-50 rounded" />
      <img
        src={img}
        className="z-10 absolute inset-0 w-full h-full object-cover rounded"
      />
    </a>
  );
}
