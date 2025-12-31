export default function SectionTitle({ title }) {
  return (
    <div className="flex flex-col items-center w-full mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-primary">
        {title}
      </h2>
      <span className="w-[8%] h-1 mt-3 bg-primary"></span>
    </div>
  );
}