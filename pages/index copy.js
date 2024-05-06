// import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Footer from 'components/oldPartials/base/footer'
import Header from 'components/oldPartials/base/header'
import Language from 'components/oldPartials/base/language'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import About from 'components/oldPartials/base/about'
import MiddleBar from 'components/oldPartials/base/middleBar'
import Offer from 'components/oldPartials/base/offer'
import { Image } from 'react-bootstrap'

export default function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
    // setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },3000)
    })

    const handleScale = async () =>{
      console.log("handleScale...")
    const elemt =  document.getElementById("splash")
    if(elemt){
      //elemt.className += "dot_scale";
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>KEI - Home</title>
        <meta name="description" content="KORV Estatement Inventory" />
        <link rel="icon" href="/logo-kei.png" />
      </Head>

      <Header/>
       <main className={styles.main}>
        <Image src='/mini_icon.svg' className={styles.background}/>
        <Language/>
      <About/>
      <MiddleBar/>
      <Offer/>
      </main>
      <Footer/>
    </div>
  )
}
