import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div className={styles.Container}>
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign Up</h5>
        <div>
                <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Your Username</label>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div>
                <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Your Email</label>
                <input type="text"
                    name="Email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>   
            
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={register} >Register</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Status: {status}
        </div>     
       
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            login Repairman?  <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">Login</a>
        </div>
        
         
        </form></div>
        </div>
    )


    return (<div>
        <Navbar />
    <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <div className={styles.container}>               
                {registerForm()}
            </div>
        </Layout>
        </div>
        
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
