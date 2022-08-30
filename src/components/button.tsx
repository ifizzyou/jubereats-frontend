import React from 'react';

interface IButtonProps {
	canClick: boolean;
	loading: boolean;
	actionText: string;
}

export const Button: React.FC<IButtonProps> = ({
	canClick,
	loading,
	actionText,
}) => {
	return (
		<button
			className={`text-lg font-medium text-white py-4 transition-colors focus:outline-none ${
				canClick
					? 'bg-lime-600 hover:bg-lime-700'
					: 'bg-gray-400 pointer-events-none'
			}`}
		>
			{loading ? 'Loading...' : actionText}
		</button>
	);
};
