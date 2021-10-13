import { Link, useHistory } from 'react-router-dom'
import { useState, useContext} from 'react'
import './SignIn.css'
import M from 'materialize-css'
import {UserContext} from '../../App'

const SignIn = () => {
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const { state1, dispatch1 } = useContext(UserContext)
    const PostData = () => {
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                username,
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                console.log(data)
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch1({type:"USER",payload:data.user})
                M.toast({html:data.message,classes:"#43a047 green darken-1"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <main>
            <div className="mycard">
                <div className="card auth-card input-field">
                    <h2>Đăng nhập</h2>
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
                        Đăng nhập
                    </button>
                    <h5>
                        <Link to="/dang-ki">Bạn chưa có tài khoản?</Link>
                    </h5>
                </div>
            </div>
        </main>
    )
}

export default SignIn