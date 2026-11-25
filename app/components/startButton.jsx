export default function StartButton() {
    return (
        <div className="flex flex-col items-center opacity-50 gap-3">
            <img 
                src="/assets/start-button.svg" 
                className="w-20 h-20 text-black"
            />
            <p className=" text-center text-xs uppercase max-w-[143px]">Press and hold to proceed to section</p>
        </div>
    )
}