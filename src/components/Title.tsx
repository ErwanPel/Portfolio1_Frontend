type titleProps = {
  title: string;
};

export default function Title({ title }: titleProps) {
  return (
    <>
      <div className="relative w-fit mx-auto ">
        <h1 className="text-center stroke-2 relative text-[42px] text-lgTextMax mb-16 z-1">
          {title}
        </h1>
        <div className="bg-lgBackgroundElement w-16 h-2 rounded-lg absolute  top-14 "></div>
      </div>
    </>
  );
}
