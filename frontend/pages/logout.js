import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
        setStatus("Logout successful")
    }

    return (<div>
        <Navbar />
        <Layout>
            <Head>
                <title>Logout</title>
            </Head>
            <div className={styles.container}>
                <div>
                    <h2 class="ml-3 pt-5 py-4 justify-center text-indigo-800 text-3xl drop-shadow-lg text-lg font-medium leading-6 text-gray-900 ">  {status}  </h2>
                </div>
                <br></br>
                <a>
                    <img src="https://pbs.twimg.com/media/C7DIQZnVAAQabzt.jpg:large" width={300} height={200} />
                </a>
            </div>
        </Layout>
    </div>

    )
}
