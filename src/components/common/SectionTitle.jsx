export default function SectionTitle({ title }) {
  return (
    <div className="flex justify-center w-full mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-primary-light border-b-4 border-primary-light pb-2">
        {title}
      </h2>
    </div>
  );
}