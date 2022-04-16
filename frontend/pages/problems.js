import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'


const URL = `${config.URL}/problems`
const Problems = ({ token }) => {

  const [problems, setProblems] = useState({
    list: [
      { id: 1, name: "Papavarin", email: "oil@email.com", room: "213", dormitory: "3", pb: "ท่อแตก" }
    ]
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [room, setRoom] = useState(0)
  const [dormitory, setDormitory] = useState('')
  const [pb, setPb] = useState('')

  useEffect(() => {
    getProblems()
  }, [])

  const getProblems = async () => {

    let problem = await axios.get(`${config.URL}/problems`)
    setProblems(problem.data)

  }

  const updateProblem = async (id) => {

    let problem = await axios.put(`${URL}/${id}`, { name, email, room, dormitory, pb })
    setProblems(problem.data)
  }

  const deleteProblem = async (id) => {

    let problem = await axios.delete(`${URL}/${id}`)
    setProblems(problem.data)
  }

  const addProblem = async (name, email, room, dormitory, pb) => {

    let problem = await axios.post(`${config.URL}/problems`,

      { name, email, room, dormitory, pb })
    setProblems(problem.data)
  }

  const printProblems = () => {

    if (problems.list && problems.list.length)
      return problems.list.map((item, index) =>
      (
        (<li key={index}>
          <p> name : {item.name} </p>
          <p> email : {item.email} </p>
          <p> ห้อง : {item.room}</p>
          <p> หอ : {item.dormitory}</p>
          <p> ปัญหา : {item.pb}</p>
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           onClick={() => updateProblem(item.id)} >Update</button> <br></br>
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           onClick={() => deleteProblem(item.id)} >Remove</button>
        </li>)
      )
      )
  }


  return (<div>
    <Navbar />
    <Layout>
      <Head>
        <title>Repair</title>
      </Head>
      <div className={styles.container}>
        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>

        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Repair Service</h3>
                <p class="mt-1 text-sm text-gray-600">แจ้งซ่อม</p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) => setName(e.target.value)}></input>
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" name="email" id="email" autocomplete="email"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) => setEmail(e.target.value)}></input>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="room" class="block text-sm font-medium text-gray-700">Room</label>
                        <input type="text" name="room" id="room" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) => setRoom(e.target.value)}></input>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="country" class="block text-sm font-medium text-gray-700">Dormitory</label>
                        <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={(e) => setDormitory(e.target.value)}>
                          <option>หอ 1,2</option>
                          <option>หอ 3</option>
                          <option>หอชาย</option>
                        </select>
                      </div>

                      <div class="col-span-6">
                        <label for="street-problem" class="block text-sm font-medium text-gray-700">Problem</label>
                        <input type="text" name="street-problem" id="street-problem" autocomplete="street-problem" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) => setPb(e.target.value)}></input>
                      </div>

                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => addProblem(name, email, room, dormitory, pb)}>Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>

          <div >Reporter</div>
          <br></br>
          {
            printProblems()
          }

        </div>
      </div>

    </Layout>
  </div>

  )
}

export default withAuth(Problems)

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

