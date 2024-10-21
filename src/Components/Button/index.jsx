export const ButtonHeader = (props) => {
    return (
        <button className="color-black text-[20px]  hover:font-bold">
            {props.children}
        </button>
    );
}
