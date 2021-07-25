import { React, useState, useEffect } from 'react'
import {useHistory, Link} from 'react-router-dom'
import './SignUp.css'
import M from 'materialize-css'

const SignUp = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    // useEffect(()=>{
    //     //uploadFields()
    // },)

    const PostData = () => {
        uploadFields()
    }
    const uploadFields = ()=>{
        
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                username,
                //pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:data.message,classes:"#43a047 green darken-1"})
                history.push('/dang-nhap')
            }
        }).catch(err=>{
            console.log(err)
        })
    }



    return (
        <main>
            <div className="mycard">
                <div className="card auth-card input-field">
                    <h2>Đăng kí</h2>
                    <input
                        type="text"
                        placeholder="Họ tên"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={()=>PostData()}
                    >
                        Đăng kí
                    </button>
                    <h5>
                        <Link to="/dang-nhap">Bạn đã có tài khoản?</Link>
                    </h5>
                </div>
            </div>
        </main>
    )
}


export default SignUp;