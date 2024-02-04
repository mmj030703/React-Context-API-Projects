import { useThemeContext } from "../context/themeContext";


export default function ThemeBtn() {
    const handleClick = (e) => {
        if(e.target.checked) themeToggler('dark');
        else themeToggler('light');
    };

    const { currentThemeVal , themeToggler } = useThemeContext();

    return (
        <div className="flex justify-end relative">
            <input type="checkbox" onChange={handleClick} checked={currentThemeVal === "dark"} className="mr-2 appearance-none outline outline-1 w-[40px] h-[20px] rounded-[30px] absolute top-2 bg-white before:absolute before:w-5 before:h-5 before:top-0 before:rounded-full before:bg-black checked:before:right-0 checked:bg-slate-600 cursor-pointer" />
        </div>
    );
}

