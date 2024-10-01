import React, { useState } from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, loading = false }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      className={`text-lg px-6 py-3 rounded-full transition duration-300 ease-in-out
        ${disabled ? 'bg-[var(--button-disabled)] text-gray-500 cursor-not-allowed' : ''}
        ${loading ? 'bg-[var(--button-loading)] text-black cursor-wait' : ''}
        ${!disabled && !loading && !isActive ? 'bg-[var(--button-default)] text-white hover:bg-[var(--button-hover)]' : ''}
        ${isActive && !loading && !disabled ? 'bg-[var(--button-hover)] text-white border-[3px] border-[var(--button-active)]' : ''}
        focus:outline-none focus:ring-[3px] focus:ring-[var(--button-active)] focus:bg-[var(--button-default)]`}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
export default Button;