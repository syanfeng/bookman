import React from "react";
import Link from "gatsby-link";
import { Topbar, CollapsibleNav, Nav, NavItem } from "amazeui-react";
import classnames from 'classnames'

const Header = (props) => {
    let currPage = props.currPage;
    return (
        <header className="am-topbar am-topbar-inverse" >
          <div className="am-container" >
            <h1 className="am-topbar-brand" >
              <Link to="/" >
                孙验沣
              </Link>
            </h1>
            <div className="am-collapse am-topbar-collapse">
              <Nav pills className="am-topbar-nav">
                    <NavItem className={classnames({
                            'am-active': currPage == 'index'
                        })}>
                        <Link  to="/">首页</Link>
                    </NavItem>
                    <NavItem className={classnames({
                            'am-active': currPage == 'javascript'
                        })}>
                        <Link to="/category/javascript">JavaScript</Link>
                    </NavItem>
                    <NavItem className={classnames({
                            'am-active': currPage == 'css'
                        })}>
                        <Link to="/category/css">CSS</Link>
                    </NavItem>
                    <NavItem className={classnames({
                            'am-active': currPage == '哲学'
                        })}>
                        <Link  to="/zhexue">走出编程</Link>
                    </NavItem>
              </Nav>
            </div>
          </div>
        </header>
      )
};

export default Header;
