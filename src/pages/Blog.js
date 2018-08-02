import React,{Component} from 'react'
import Frame from './Frame'
import { withRouter } from 'react-router-dom'
// 引入axios
import axios from 'axios'

import Loading from '../components/img/Loading'

class Blog extends Component{
    state={
        posts:[],
        loading:true

    }

    componentDidMount(){
        // 发送异步请求，请求服务器数据
        axios.get("http://jsonplaceholder.typicode.com/posts").then( resp => {
            console.log(resp);
            // 优化，判断请求回来的数据是否完整，先进行判断，如果不完整则不进行重新渲染
            if(resp.status === 200 && resp.statusText === "OK"){
                // react中通过this.setState实现state更新，在react中不要直接改变state
                this.setState({
                    posts : resp.data,
                    // 用户体验优化
                    loading:false
               })
          
            }
                
        } ).catch( err => {
            console.log('请求数据失败'  + err)
        })
    }


    handlePostClick(id){       
        this.props.history.push(`/blog/post/${id}`);
    }

    render(){
        return (
            <Frame>
                {/* 条件渲染，如果数据未能请求完成加显示图片loading，加载完成则渲染数据内容 */}
                {
                this.state.loading
                ?
                < Loading />
                :
                this.state.posts.map(post => {
                    return (
                        <p 
                        onClick={this.handlePostClick.bind(this, post.id)} 
                        key={post.id}
                        >
                        {post.id}、{post.title}
                        </p>
                        )
                    })
                }
            </Frame>
        )
    }
}


export default withRouter(Blog);