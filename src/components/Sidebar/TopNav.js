import React from 'react';

export default function TopNav({ title, onMenuClick = () => {} }) {
	return (
		<div id="headerToggle">
			<a
                className="toggle"
                href="#"
				onClick={(e) => {
					e.preventDefault();
					onMenuClick();
				}}
			>
				{' '}
			</a>
		</div>
	);
}
