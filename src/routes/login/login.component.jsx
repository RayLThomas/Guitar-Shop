import { Fragment } from "react"
import Nav from "../../components/Nav/Nav.component"
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const Login = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <Fragment>
            <main className="container">
                <Nav />
                <h1>Login Page</h1>
                <button onClick={logGoogleUser}>
                    Sign in with Google Popup.
                </button>
            </main>
        </Fragment>
    )
}



export default Login;