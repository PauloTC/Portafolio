import React from 'react';

export default function TopNav({ title, onMenuClick = () => {} }) {
	return (
		<div id="headerToggle">
			<div
				className="toggle"
				onClick={(e) => {
					e.preventDefault();
					onMenuClick();
				}}
			>
				{' '}
			</div>
		</div>
	);
}
