export default function ForwardButton() {



    return (
        <button 
            type="button"
            className="group relative w-12 h-12 cursor-pointer focus:outline-none"
            aria-label="Forward"
        >
            <img
                src="/assets/rect-glow-line.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full transition-transform duration-200 ease-out group-hover:scale-110 group-active:scale-125"
            />
            <img
                src="/assets/rect-inner-dash.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 m-auto h-9 w-9 opacity-0 transition-all duration-200 ease-out group-hover:opacity-75 group-hover:scale-100 group-active:opacity-100 group-active:scale-115"
            />
            <img
                src="/assets/Polygon.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 m-auto h-auto w-2 transition-transform duration-200 ease-out group-hover:scale-90 group-active:scale-75"
            />
        </button>
    )
}