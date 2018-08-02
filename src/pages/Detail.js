import React,{Component} from 'react'
import Frame from './Frame'
import { withRouter } from 'react-router-dom'

// 引入axios
import axios from 'axios'

import Loading from '../components/img/Loading'

class Detail extends Component{
    state = {
        content:{},
        isLoading:true
    }
    componentDidMount(){
        // 因为是上一级的子组件，所以可以通过this.props取到上一层组件中传入的内容
        const {id} = this.props.match.params
        // 发送异步请求，请求服务器数据
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`).then( resp => {
            // console.log(resp);
            // 优化，判断请求回来的数据是否完整，先进行判断，如果不完整则不进行重新渲染
            if(resp.status === 200 && resp.statusText === "OK"){
                // react中通过this.setState实现state更新，在react中不要直接改变state
                this.setState({
                    content:resp.data.body,
                    isLoading:false
                })
            }
                
        } ).catch( err => {
            console.log('请求详情失败'  + err)
        })
    }
    render(){
        return (
            <Frame>
                {
                    this.state.isLoading
                    ?
                    <Loading />
                    :
                    <div>Datail {this.state.content} </div>
                }
            </Frame>
        )
    }
}

export default withRouter(Detail)