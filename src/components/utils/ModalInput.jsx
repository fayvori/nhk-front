
export const ModalInput = (props) => {
    return (
        <input
             className="max-w-[400px] mb-4 bg-[#ECECEC] rounded-md text-[#878787] border border-3 border-[#A1A1A1] py-2 px-1"
             type={props.type}
             name={props.name}
             placeholder={props.placeholder}
             onChange={props.onChange}
             onBlur={props.onBlur}
             value={props.value}
           />
    )
}
