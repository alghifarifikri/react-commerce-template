const Button = ({ label, type = "primary", onClick, disabled }) => {
  const baseClass =
    "px-4 py-2 rounded-lg font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300";
  const primaryClass =
    "bg-[#41A0E4] text-white hover:bg-[#3a8dcc] focus:ring-[#41A0E4]";
  const secondaryClass =
    "bg-white text-[#41A0E4] border border-[#41A0E4] hover:bg-[#f0f8ff] focus:ring-[#41A0E4]";

  const buttonClass = `${baseClass} ${
    type === "primary" ? primaryClass : secondaryClass
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
