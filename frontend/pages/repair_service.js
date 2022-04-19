import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const URL = `${config.URL}/problems`
const Repair_Service = ({ token }) => {

    const [problems, setProblems] = useState({
        list: [
            { id: 1, name: "Papavarin", email: "oil@email.com", room: "213", dormitory: "หอ 3", pb: "ท่อแตก" }
        ]
    })

    useEffect(() => {

        getProblems()
    }, [])

    const getProblems = async () => {

        let problem = await axios.get(`${config.URL}/problems`)
        setProblems(problem.data)

    }

    // const printProblems = () => {
    //     if (problems.list && problems.list.length)

    //         return problems.list.map((item, index) =>
    //         (<li key={index}>
    //             {item.name}
    //             {item.email}
    //             {item.room}
    //             {item.dormitory}
    //             {item.pb}
    //         </li>)
    //         )
    // }
    const printName = () => {
        if (problems.list && problems.list.length)

            return problems.list.map((item, index) =>
            (<li key={index}>
                {item.name}
                
            </li>)
            )
    }
    const printEmail = () => {
        if (problems.list && problems.list.length)

            return problems.list.map((item, index) =>
            (<li key={index}>
                
                {item.email}
                
            </li>)
            )
    }
    const printRoom = () => {
        if (problems.list && problems.list.length)

            return problems.list.map((item, index) =>
            (<li key={index}>
                
                {item.room}
                
            </li>)
            )
    }
    const printDormitory = () => {
        if (problems.list && problems.list.length)

            return problems.list.map((item, index) =>
            (<li key={index}>

                {item.dormitory}
           
            </li>)
            )
    }
    const printPb = () => {
        if (problems.list && problems.list.length)

            return problems.list.map((item, index) =>
            (<li key={index}>

                {item.pb}
            </li>)
            )
    }


    return (<div>
        <Navbar />
        <Layout>
            <Head>
                <title>Repair Service</title>
            </Head>
            <br></br>
            <div className={styles.container}>
                <h1 class="ml-3 pt-5 py-4 justify-center text-indigo-800 text-3xl drop-shadow-lg text-lg font-medium leading-6 text-gray-900 ">Repair Service</h1>

                <br></br>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-m text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Room
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Dormitory
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Problem
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {printName()}
                                </th>
                                <td class="px-6 py-4">
                                    {printEmail()}
                                </td>
                                <td class="px-6 py-4">
                                    {printRoom()}
                                </td>
                                <td class="px-6 py-4">
                                    {printDormitory()}
                                </td>
                                <td class="px-6 py-4">
                                    {printPb()}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="/problems" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>
                <a href="/problems" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  แจ้งซ่อม
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

        </Layout>  </div>
    )
}

export default withAuth(Repair_Service)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}

