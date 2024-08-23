const Input = ({
  placeholder = "placeholder ...",
  label = "label",
  type = "text",
  inputStyle,
  inputError,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label
        className=" text-sm mb-1 text-gray-600 dark:text-gray-200"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        className={inputStyle}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      <p className=" text-red-500 text-sm">{inputError}</p>
    </div>
  );
};

export default Input;
