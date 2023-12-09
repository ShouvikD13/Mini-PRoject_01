export default function LoginPage() {
    return(
            <form className="login">
                <h1>Login</h1>
                <input type ="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <button>Login</button>
            </form>
    );
}