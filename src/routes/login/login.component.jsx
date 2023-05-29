import { Fragment, useContext } from "react"
import Nav from "../../components/Nav/Nav.component"
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { UserContext } from '../../contexts/user.context'

const Login = () => {
    const { setCurrentUser } = useContext(UserContext);
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user, { displayName: user.displayName });
        setCurrentUser(user);
    }

    return (
        <Fragment>
            <main className="container">
                <Nav />
                <h1>Login Page</h1>
                <button onClick={signInWithGoogle}>
                    Sign in with Google Popup.
                </button>
            </main>
        </Fragment>
    )
}



export default Login;