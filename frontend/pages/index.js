import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {

  return (
    <div>
      <Navbar />
      <Layout>
        <Head>
          <title>First Page</title>
        </Head>
        <div className={styles.container}>

          <div className="flex flex-wrap">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-fuchsia-900 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg w-full" src="https://img.kaidee.com/prd/20180504/337946275/b/9bd13715-3ad3-4564-8da6-30ec643a616c.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ระบบแจ้งซ่อมออนไลน์</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-white">ผู้แจ้งซ่อมสามารถแจ้งผ่านระบบออนไลน์ และสามารถตรวจสอบสถานะการแจ้งซ่อม ว่างานที่แจ้งอยู่ในสถานะใด เช่น แจ้งซ่อม/ รอตรวจสอบ / ดำเนินการ / ส่งซ่อม เป็นต้น</p>
                <a href="/problems" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  แจ้งซ่อม
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <br></br>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-fuchsia-900 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg w-full" src="https://inwfile.com/s-cn/qw53a5.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ประวัติการซ่อม</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-white">ฝ่ายช่างสามารถตรวจสอบประวัติการซ่อมของอุปกรณ์ เพื่อความสะดวกในการวิเคราะห์ปัญหาของอุปกรณ์ที่ผ่านมา</p>
                <a href="/repair_service" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  ข้อมูลการซ่อม
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            

          </div>

        </div>
      </Layout>
    </div>

  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}

