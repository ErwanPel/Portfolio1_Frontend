type titleProps = {
  title: string;
};

export default function TitleLevel2({ title }: titleProps) {
  return <h2 className="text-center text-3xl text-lgTextMin m-8">{title}</h2>;
}
