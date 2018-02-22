import React from "react";
import Link from "gatsby-link";
import { Topbar, CollapsibleNav, Nav, NavItem } from "amazeui-react";
import classnames from 'classnames'

const Header = (props) => {
    console.log(props)
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
                            'am-active': currPage == 'page-2'
                        })}>
                        <Link  to="/page-2">音乐</Link>
                    </NavItem>
                    <NavItem className={classnames({
                            'am-active': currPage == 'about'
                        })}>
                        <Link  to="/about">个人简介</Link>
                    </NavItem>
              </Nav>
            </div>
          </div>
        </header>
      )
};

export default Header;
