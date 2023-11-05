import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/Slices/authenticationSlice";
import image from '../../assets/icon/login.jpg';

export default function SignUp(){
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const [credentials, setcredentials] = useState({name:"",email:"",phone:"",password:""});
	const { error, error_message, success_message } = useSelector((state) => state.authentication);

	useEffect(() => {
        // redirect to home if already logged in
        if (success_message !== '') navigate("/sign-in", { replace: true });
    }, [success_message]);

	const handleSubmit = async (e) =>{
        e.preventDefault();
        const {name, email, phone, password} = credentials;
		dispatch(registerUser({ name, email, phone ,password}));
    }
    const onChange = (e) =>{
        setcredentials({...credentials,[e.target.name]:e.target.value});
      }
	  
	return(
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<div class="login100-pic js-tilt" data-tilt>
						<img src={image} alt="IMG" className="login_image"/>
					</div>

					<form class="login100-form validate-form" onSubmit={handleSubmit}>
						<span class="login100-form-title">
							Member Sign Up
						</span>

						<div class="wrap-input100 validate-input">
							<input class="input100" value={credentials.name} onChange={onChange} type="text" name="name" placeholder="Full Name" />
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i class="fa fa-user" aria-hidden="true"></i>
							</span>
						</div>

						<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<input class="input100" value={credentials.email} onChange={onChange} type="text" name="email" placeholder="Email" />
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i class="fa fa-envelope" aria-hidden="true"></i>
							</span>
						</div>

						<div class="wrap-input100 validate-input">
							<input class="input100" value={credentials.phone} onChange={onChange} type="text" name="phone" placeholder="Phone" />
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i class="fa fa-phone" aria-hidden="true"></i>
							</span>
						</div>
						
						<div class="wrap-input100 validate-input" data-validate = "Password is required">
							<input class="input100" value={credentials.password} onChange={onChange} type="password" name="password" placeholder="Password" />
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i class="fa fa-lock" aria-hidden="true"></i>
							</span>
						</div>

						{error ? <span className="sign__error">{error_message}</span>: success_message !== '' && <span className="sign__success">{success_message}</span>}

						<div class="container-login100-form-btn">
							<button class="login100-form-btn">
								Create your Account
							</button>
						</div>

						<div class="text-center p-t-12 p-b-100">
							<Link to='/sign-in'>
								<a class="txt2" href="#">
									Login
									<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
								</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}