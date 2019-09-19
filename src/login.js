import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
class View extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {
            username:'',
            password:'',
        }
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
        this.getConnect = this.getConnect.bind(this);
    }

    userChange(e){
        this.setState({ username : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    submit(){
        this.getConnect();
    }

    getConnect(){  //api请求函数
        let storage = window.localStorage;
        let text = {username:this.state.username,password:this.state.password} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://127.0.0.1:8080/login`,{   //Fetch方法
            method: 'POST',
            headers: {'Content-Type': 'text/plain'},
            body: send
        }).then(res => res.json()).then(
            data => {
                if(data.token){
                    window.alert('验证成功，欢迎登录');
                    this.props.history.push('/main');

                } 
                if(data.code==401) window.alert('验证失败，用户名或密码错误')
                storage.token  = data.token;
                console.log(storage.token);
            }
        ).then()
    }

    render(){
        return(
        <div style={{margin:'10px'}}>
            <Segment style={{textAlign:'center'}}>
                <h2>请登录</h2>
                <Input 
                    id='username' 
                    placeholder='用户名' 
                    style={{marginBottom:'10px'}}
                    onChange={this.userChange}
                /><br/>
                <Input 
                    id='password' 
                    type='password' 
                    placeholder='密码' 
                    style={{marginBottom:'10px'}}
                    onChange={this.passwordChange}
                /><br/>
                <Button 
                    primary 
                    content='登录' 
                    style={{marginBottom:'10px'}}
                    onClick={this.submit}
                />
            </Segment>
        </div>
    )
    }
}
export default View;