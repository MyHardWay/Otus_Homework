import React from 'react';

const Footer = () => (
      <div className="footer">
            <div className="container">
                <ul className="footer__menu">
                    <li>The Project</li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Icon Creators</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Iconathon</a></li>
                </ul>
                <ul className="footer__menu">
                    <li className="list-header">Pricing</li>
                    <li><a href="/">NounPro</a></li>
                    <li><a href="/">Teams</a></li>
                    <li><a href="/">Education</a></li>
                </ul>
                <ul className="footer__menu">
                    <li className="list-header">Products</li>
                    <li><a href="/">Apps &amp; Plugins</a></li>
                    <li><a href="/">Icon API</a></li>
                    <li><a href="/">Nounji</a></li>
                    <li><a href="/">Lingo</a></li>
                </ul>
            </div>
      </div>
);

export default Footer;