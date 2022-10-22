export default function Input({
  requirements = [],
  name,
  label,
  placeholder,
  validation,
  width = "w-10/12",
  margin = "mx-auto",
  required = false,
  ...props
}) {
  const validateField = !validation[name].flat().includes(false);

  return (
    <>
      <label className="text-lg ml-12">
        {label}
        {required && <span className="text-red-800">*</span>}
      </label>
      {props?.type !== "textarea" ? (
        <input
          name={name}
          title={props.disabled && "Este campo no es editable"}
          placeholder={placeholder}
          className={`${width} ${margin} hover:border-blue-700 transition-all tracking-wide border-2 rounded-lg p-1.5 ${
            validateField ? "border-[#cccccc]" : "border-red-700"
          } focus:outlined-none focus:outline-0`}
          {...props}
        />
      ) : (
        <textarea
          className={`${width} ${margin} hover:border-blue-700 transition-colors tracking-wide border-2 rounded-lg p-1.5 ${
            validateField ? "border-[#cccccc]" : "border-red-700"
          } focus:outlined-none focus:outline-0`}
          name={name}
          placeholder={placeholder}
          {...props}
        />
      )}
      <ul className="w-10/12 mx-auto rounded-lg p-1.5">
        {requirements.map((require, idx) => (
          <li
            key={idx}
            className={`${
              validateField && "hidden"
            } text-red-700 font-light animate-bounce`}
          >
            {require}
          </li>
        ))}
      </ul>
    </>
  );
}
