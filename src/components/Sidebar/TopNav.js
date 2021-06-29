import React from 'react';

export default function TopNav({ title, onMenuClick = () => {} }) {
  return (
    <div id="headerToggle">
      <i
        className="toggle fas fa-bars"
        onClick={e => {
          e.preventDefault();
          onMenuClick();
        }}
      >
        {' '}
      </i>
    </div>
  );
}