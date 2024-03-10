import { useState  } from 'react'
import { useLogin } from '../hooks/useLogin'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)


    }

    return (
        <form className = " max-w-[400px] mt-10 m-auto p-5 bg-white rounded" onSubmit ={handleSubmit}>
            <h3 className='text-2xl font-semibold py-4 '>Login</h3>

            <label>Email:</label>
            <input
                type = "email"
                onChange = {(e) => setEmail(e.target.value)}
                value={email}
            />
            
            <label>Password:</label>
            <input
                type = "password"
                onChange = {(e) => setPassword(e.target.value)}
                value={password}
            />

            <button className="mt-4 bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-[100%]" disabled={isLoading}>Login</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login