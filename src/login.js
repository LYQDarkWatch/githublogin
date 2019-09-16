import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class View extends React.Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
        <div style={{margin:'10px'}}>
            <Segment style={{textAlign:'center'}}>
                <h2>请登录</h2>
                <Input id='user' placeholder='用户名' style={{marginBottom:'10px'}}/><br/>
                <Input id='password' type='password' placeholder='密码' style={{marginBottom:'10px'}}/>
                <br/>
                <Link to="/main">
                <Button primary content='登录' style={{marginBottom:'10px'}}/>
                </Link>
                <Button content='重置' style={{marginLeft:'20px'}}/>
            </Segment>
        </div>
    )
    }
}
export default View;
