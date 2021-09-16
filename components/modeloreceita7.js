import Image from 'next/image'
import styles from '../styles/Components.module.css'
import Link  from 'next/link'

function modeloreceita7(){
    return (
        <div className={styles.receita}>
            <div className={styles.image}> 
                <p><h2>Abobrinha Refogada</h2></p>           
                <Image src = "/abobrinharefo.jpg" width={400} height={270}/>                            
            </div>

            <div className={styles.texto}>
                
                <ul><h2>Ingredientes: </h2><br />

                <li>1 abobrinha grande</li><br />
                <li>1 caldo knor de sua preferência</li><br />
                <li>1 envelope de sazón de legumes</li><br />
                <li>1 cebola picada</li><br />
                <li>1/2 colher de óleo</li><br />
                <li>1/2 copo de água</li><br />

                <h2>Modo de Preparo</h2><br />

                <li>Corte a abobrinha em pedaços não muito grandes, refogue a cebola junto com o caldo knorr no óleo.</li><br />
                <li>Quando a cebola estiver ficando dourada adicione as abobrinhas cortadas, junto com o sazón. </li><br />
                <li>Mexa um pouco para misturar os ingredientes e coloque a água. Tampe a panela e deixe em fogo baixo.</li><br />
                <li>É necessário olhar como a abobrinha esta ficando, pois se a quantidade de água tiver sido pouca, ela poderá grudar na panela e queimar, caso esteja querendo grudar é só adicionar mais água.</li><br /> 
                <li>Esta receita não vai sal porquê o sazón e o caldo knorr já são muito salgados.</li></ul>
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

export default modeloreceita7