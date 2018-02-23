import React from "react";
import Link from "gatsby-link";
import { Nav, NavItem } from "amazeui-react";
import { Icon, Button  } from "antd";
import classnames from 'classnames'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topBarIsShow: false
        }
        this.navToggle = this.navToggle.bind(this)
    }

    componentDidMount() {
        document.addEventListener('click', function(e) {
            console.log(e.target.classnames)
        })
    }

    navToggle() {
        if(this.state.topBarIsShow) {
            this.setState({
                topBarIsShow: false
            })
        } else {
            this.setState({
                topBarIsShow: true
            })
        }
    }
    render() {
        let currPage = this.props.currPage;
        return (
            <header className="am-topbar am-topbar-inverse" >
            <div className="am-container" >
                <h1 className="am-topbar-brand" >
                <Link to="/" >
                    孙验沣
                </Link>
                </h1>
                <div className={classnames({
                        'am-collapse': true,
                        'am-topbar-collapse': true,
                        'isShow': this.state.topBarIsShow
                    })}>
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
                <div className="site-nav-toggle">
                    <Icon type="bars" onClick={this.navToggle}/>
                </div> 
            </div>
            </header>
        )
    }
};

export default Header;
