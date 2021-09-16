import Image from 'next/image'
import styles from '../styles/Components.module.css'
import Link  from 'next/link'

function modeloreceita8(){
    return (
        <div className={styles.receita}>
            <div className={styles.image}> 
                <p><h2>Pimentão com ovo</h2></p>           
                <Image src = "/ovopimentao.jpg" width={400} height={270}/>                            
            </div>

            <div className={styles.texto}>

                <ul><h2>Modo de preparo:</h2> <br />

                <li>Lave bem e corte os pimentões ao meio, retire as sementes e descarte</li><br />
                <li>Distribua em um refratário, tempere com sal e pimenta e regue com um fio de azeite</li><br />
                <li>Leve ao forno preaquecido a 180 graus por 5 minutos</li><br />
                <li>Retire do forno e com cuidado, quebre um ovo dentro de cada metade</li><br />
                <li>Tempere com sal e pimenta e leve novamente ao forno até estarem totalmente assados</li></ul>
            </div>
            <footer className={styles.footer}>
                <Link
                    href="https://www.google.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                >Contato</Link>

                <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >Sobre nós</Link>
        
                <Link
                    href= "https://www.google.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                >Instagram</Link>
            </footer>
        </div>
    )
}

export default modeloreceita8