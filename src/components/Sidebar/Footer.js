import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li className='footer-social' key={url}>
              <a href={url} className={`fab ${icon}`}></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
