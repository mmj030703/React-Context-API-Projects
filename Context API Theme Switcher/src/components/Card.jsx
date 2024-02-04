import ThemeBtn from "./ThemeBtn";

export default function Card() {
    return (
        <div className="outline outline-1 outline-slate-300 pt-1 pb-3 px-1 rounded-md dark:bg-slate-800">
            <ThemeBtn />
            <img className="h-[300px] rounded-md" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
            <div className="flex justify-between items-center mt-5 px-3">
                <p className="font-bold text-[1.8rem] dark:text-white">Boat HeadPhone</p>
                <button className="text-[15px] font-bold bg-blue-600 px-[2.5rem] py-2 h-fit rounded-sm text-white">CART</button>
            </div>
        </div>
    );
}
