import SectionTitle from "../common/SectionTitle";

export default function AboutSection() {
  return (
    <div className="px-5 sm:px-10 py-10">
        <SectionTitle title="About Me"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
    </div>
  );
}