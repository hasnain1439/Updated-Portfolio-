import { LuGithub } from "react-icons/lu";

// Rename 'iconName' to 'Icon' (capitalized) in the destructuring
export default function IconWrapper({ iconName: Icon }) {
    return (
        <div className="bg-white shadow-md shadow-dark-lighter p-3 rounded-xl hover:shadow-lg hover:shadow-dark duration-300 cursor-pointer hover:text-primary">
            {/* Now you can use it as a standard JSX component */}
            <Icon className="text-xl" />
        </div>
    )
}