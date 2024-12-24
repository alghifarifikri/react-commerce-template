const Input = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-[#9B9B9B]" htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded px-2 py-1"
        required={required}
      />
    </div>
  );
};

export default Input;
