import { Fragment } from "react"
import Nav from "../../components/Nav/Nav.component"
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from '../../components/form-input/form-input.component'
import ButtonCustom from "../../components/ButtonCustom/button-custom.component";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const  defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;            
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            createUserDocumentFromAuth(user);
        } catch (error) {
            console.log('There was an error', error.message);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value});
    }

    return (
        <Fragment>
            <Nav />
            <main className="container">
                <div className="sign-up-container">
                    <h2>Don't have an account?</h2>
                    <span>Sign up with your email and password</span>
                    <form onSubmit={handleSubmit} >
                        <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                        
                        <FormInput label='Email' type="email" required onChange={handleChange} name="email"  value={email}/>
                        
                        <FormInput label='Password' type="password" required onChange={handleChange} name="password"  value={password}/>
                        
                        <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword"  value={confirmPassword}/>
                        <ButtonCustom className={'btn-primary'} type='submit'>Sign Up</ButtonCustom>
                    </form>
                </div>
            </main>
        </Fragment>
    )
}

export default SignUp