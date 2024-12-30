import { Link } from 'react-router-dom'
export default function Login() {
    return (

        <section id="register-page" class="content auth">
        <form id="register">
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com"/>

                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password"/>

                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password"/>

                <input class="btn submit" type="submit" value="Register"/>

                <p class="field">
                    <span>If you already have profile click <Link to="/login">here</Link></span>
                </p>
            </div>
        </form>
    </section>

    )
}