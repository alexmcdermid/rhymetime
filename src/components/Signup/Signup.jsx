import Background from "../../img/background.png";
import './Signup.css';

export default function Signup(props) {
    return (
        <div className="login">
            <div className = 'background'style={{backgroundImage: "url(" + Background + ")"}} >
                <div className='topTextLogin'>Rhyme Time Signup</div>
            </div>
                <div className='login-details'>
                    <span className='title'>Create an Account</span>
                    <span className='sub-title'>Let's get started!</span>
                    <div className='signup-form'onSubmit={(evt)=>props.handleSubmit(evt)}>
                    <form className='signupForm' autoComplete="off">
                        <label className='name'>Name</label>
                        <input name='name' className='name-detail'value={props.name} onChange={(evt)=>props.handleChange(evt)} required ></input>
                        <label className='email-address'>Email address</label>
                        <input name='email' className='email' value={props.email} onChange={(evt)=>props.handleChange(evt)} required></input>
                        <label className='password'>Password</label>
                        <input type = 'password' name='password' className='password-detail' value={props.password} onChange={(evt)=>props.handleChange(evt)} required></input>
                        <label className='confirm-password'>Confirm Password</label>
                        <input type="password" name="confirm" className = 'confirm' value={props.confirm} onChange={(evt)=>props.handleChange(evt)} required />
                        <button className='submit-login' type='submit'>Create Account</button>
                    </form>
                    </div>
                    <span className="error-message">{props.error}</span>
                </div>
           
        </div>
    )
}