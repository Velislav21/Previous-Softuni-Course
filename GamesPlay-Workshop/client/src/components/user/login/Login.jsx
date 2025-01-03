import { Link } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import { useLogin } from '../../../hooks/useAuth'

export default function Login() {

    const login = useLogin();

    const { values, changeHandler, submitHandler } =
        useForm(
            { email: '', password: '' },
            async ({ email, password }) => {
                
                try {
                    login(email, password)

                } catch (err) {
                    console.log(err)
                }

            }
        )

    return (


        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" value={values.email} onChange={changeHandler} />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" value={values.password} onChange={changeHandler} />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    )
}