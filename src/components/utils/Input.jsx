
export const Input = (props) => {
    return (
        <input 
            type="text"
            value={props.value}
            onChange={props.onChange}
            onBlur={props?.onBlur}
            style={props.style}
            className="bg-[#EDF5E1] border border-3 border-[#DEDEDE] py-1 rounded px-3"
            placeholder={props.placeholder} 
        />
    )
}
