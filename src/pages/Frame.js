import React,{Component,Fragment} from 'react'

import {
    Logo,
    Nav
} from '../components'


export default class Frame extends Component {
    state = {
        navItems :[
            {
                url : '/home' ,
                text :'首页'
            },
            {
                url : '/blog' ,
                text :'博客'
            },
            {
                url : '/about' ,
                text :'关于我'
            }
        ]
    }

    render(){
        return (
            <Fragment>
                {/*verticalLogo是从Home.js中传过来的，所以用this.props取得  */}
                <Logo  vertical = {this.props.verticalLogo} />
                {/* navItems 是本组件本身的数据，所以用this.state.navItems取得 */}
                <Nav items={this.state.navItems}/>
                {/* 组件在引用处Home.js中，组件标签内的内容，可以用this.props.children取得 */}
                <div className="main">{this.props.children}</div>
            </Fragment>
        )
    }
}