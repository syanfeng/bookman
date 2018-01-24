import React from "react";
import Link from "gatsby-link";
import { Topbar, CollapsibleNav, Nav, NavItem } from "amazeui-react";

const Header = () => (
  <div
    style={{
      background: "#000",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1
        style={{
          margin: 0,
          display: "inline"
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Bookman
        </Link>
      </h1>
      <Nav pills style={{
          display: 'inline-block',
          marginTop: 0,
          verticalAlign: 'middle',
          marginLeft: '20px',
      }}>
        <NavItem>
            <Link to="/">首页</Link>
        </NavItem>
        <NavItem><Link to="/page-2">Page2</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
      </Nav>
    </div>
  </div>
);

export default Header;
