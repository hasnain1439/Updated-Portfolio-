export default function SkillCard({ skill, description, bgColor, icon: Icon }) {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${bgColor}`}
    >
      <div className="flex items-center text-center flex-col gap-4">
        {/* Icon Wrapper: White transparency (Glass effect) */}
        <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg text-white backdrop-blur-sm">
          {Icon && <Icon size={26} />}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2 text-white">{skill}</h3>
          <p className="text-gray-200 text-sm leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}