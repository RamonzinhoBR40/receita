import Menu from "../components/menu"
import Image from 'next/image'
import Link  from 'next/link'
import styles from '../styles/Home.module.css'


function Receitas(){
  return (
      <>
         <main className={styles.main}>
      <h1 className={styles.title}>
        <Link href="/"> A</Link> 
        <Link href="/"> B</Link>
        <Link href="/"> C</Link>
        <Link href="/"> D</Link>
        <Link href="/"> E</Link>
        <Link href="/"> F</Link>
        <Link href="/"> G</Link>
        <Link href="/"> H</Link>
        <Link href="/"> I</Link>
        <Link href="/"> J</Link>
        <Link href="/"> K</Link>
        <Link href="/"> L</Link>
        <Link href="/"> M</Link>
        <Link href="/"> N</Link>
        <Link href="/"> O</Link>
        <Link href="/"> P</Link>
        <Link href="/"> Q</Link>
        <Link href="/"> R</Link>
        <Link href="/"> S</Link>
        <Link href="/"> T</Link>
        <Link href="/"> U</Link>
        <Link href="/"> V</Link>
        <Link href="/"> W</Link>
        <Link href="/"> X</Link>
        <Link href="/"> Y</Link>
        <Link href="/"> Z</Link>
      </h1>

      <p className={styles.description}>
      (Clique na letra inicial do produto principal){' '}
      </p>

      <div className={styles.grid}>
          <Link href="/Receitas1" >
            <a className={styles.card}>
            <Image src = "/hamburguer.jpg" width={400} height={280}/>
            <h2>Hamburguer de Frango &rarr;</h2>
            <p>Otima opção para comidas diferentes</p></a>
          </Link>

          <Link href="/Receitas1" >
            <a className={styles.card}>
            <Image src = "/abobrinharefo.jpg" width={400} height={280}/>
            <h2>Hamburguer de Frango &rarr;</h2>
            <p>Otima opção para comidas diferentes</p></a>
          </Link>

          <Link href="/Receitas2" >
            <a className={styles.card}>
            <Image src = "/frangolegumes.jpg" width={400} height={280}/>
            <h2>Frango com Legumes&rarr;</h2>
            <p>Otima opção para comidas diferentes</p></a>
          </Link>          
        
          <Link
          href="https://github.com/vercel/next.js/tree/master/examples"
          >
            <a className={styles.card}><h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p></a>
          </Link>
          
          <Link href="/Receitas3" >
            <a className={styles.card}>
            <Image src = "/fricasse.jpg" width={400} height={280}/>
            <h2>Fricassê&rarr;</h2>
            <p>Otima opção para comidas diferentes</p></a>
          </Link>

          <Link href="/Receitas4" >
            <a className={styles.card}>
            <Image src = "/sopa.jpg" width={400} height={280}/>
            <h2>Sopa de Frango&rarr;</h2>
            <p>Otima opção para comidas diferentes</p></a>
          </Link>

          <Link href="/Receitas1" >
            <a className={styles.card}>
            <Image src = "/bolinho.jpg" width={400} height={280}/>
            <h2>Hamburguer de Frango &rarr;</h2>
            <p>Otima opção para comidas diferentes</p></a>
          </Link>

        <Link href="https://nextjs.org/learn" >
          <a  className={styles.card}><h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p></a>
        </Link>

        

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          <a className={styles.card}><h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p></a>
        </Link>
     </div>
   
    </main>
      
      </>
  )
}

export default Receitas
