import React from 'react';

interface RoundedButtonProps {
    onClick: () => void; // Function type for onClick
    label: string; // Label for the button
    className?: string; // Optional additional class names
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ onClick, label, className = '' }) => {
    return (
        <button
            className={`px-6 py-2 bg-[#65558f] text-white rounded-full hover:bg-[#52444a] transition duration-300 ease-in-out ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default RoundedButton;