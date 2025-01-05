import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import { useRegister } from '../../../hooks/useAuth'

const initialValues = { email: '', password: '', rePassword: '' }

export default function Register() {

    const register = useRegister();

    const navigate = useNavigate();

    const registerHandler = async (values) => {

        try {
            await register(values.email, values.password, values.rePassword);
            navigate('/');

        } catch (err) {
            console.log(err)
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler)
    return (

        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={values.email}
                        onChange={changeHandler} />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler} />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePassword"
                        id="confirm-password"
                        value={values.rePassword}
                        onChange={changeHandler} />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    )
}