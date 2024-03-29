import axios from 'axios';
import React from 'react';
import './index.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {
                    name:"",
                    description:"",
                    forks:"",
                    owner:{
                        login:"",
                        avatar_url:""
                    }
                }
            ]
        }
    }


    getData=()=>{
        axios.defaults.headers.common['Authorization'] = localStorage.token;
        console.log(localStorage.token)
        // var api='https://api.github.com/search/repositories?q=stars:%3E=500&sort=stars&order=desc';
        var api='http://127.0.0.1:8080/about' 
        
        axios.get(api).then((response)=> {
            console.log(response.code)
            if(response.data.code === 400){
                window.alert('验证失败，请重新登录');
                this.props.history.push('/');
            }
            if(response.data.items){
            this.setState({
                list:response.data.items
            })
            console.log(response)
            console.log(localStorage.token)
            console.log(localStorage.username)
        }
        
        })
    }
    componentDidMount() {
        this.getData()
    }

    logout = () =>{
        localStorage.clear();
        this.props.history.push('/')
    }
    render() {
        const divstyle = {
            
            width:'400px',
            height:'350px',
            backgroundColor:'white',
            fontSize:'15px',
            textAlign:'center',                     
        }
        
        return(
            <div >
            <div >
            {
            <div id='top'>
                <h1 style={{float:'left'}}>当前用户：{localStorage.username}</h1>
                <button style={{marginTop:'36px',marginLeft:'10px'}}onClick={this.logout}>退出登录</button>
            </div>
        }
        </div>
            <div>
                    {
                        this.state.list.map( (value,key) =>{
                           return(

                           <div style={divstyle} id='one'>
                           <div id='two'>
                           <div id="logo" style={{display:'inline-block'}}><img src={value.owner.avatar_url} /></div>
                           <div id='name' style={{display:'inline-block'}}><span2>{value.name}</span2></div>
                           <div id='star' style={{display:'inline-block'}}><span>{value.forks}</span></div>
                           </div>
                           <div id='fenge' />
                           <div  id='three'>
                           <div id='descrip'>{value.description}</div>
                           </div>
                           <div id='fenge'/>
                           <div id='four'>
                           <span1>Owner:{value.owner.login}</span1>
                           </div>
                           </div>
                       
                           )
                        })
                    }
            </div>
            </div>
        )
    }
}
export default Main;
  