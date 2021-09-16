import Image from 'next/image'
import styles from '../styles/Components.module.css'
import Link  from 'next/link'

function modeloReceita1(){
    return (
        <div className={styles.receita}>
            <div className={styles.image}> 
                <p><h2>Hamburguer de Frango</h2></p>           
                <Image src = "/hamburguer.jpg" width={400} height={270}/>                            
            </div>

            <div className={styles.texto}>
                
                <ul><h2>Ingredientes: </h2><br />

                <li>400 g de peito de frango</li><br />
                <li>Sal a gosto</li><br />
                <li>Pimenta-do-reino a gosto</li><br />
                <li>Tempero de sua preferência a gosto</li><br />
                <li>1 cebola ralada</li><br />
                <li>5 colheres de sopa de farinha de aveia</li></ul>

                <ul><h2>Modo de preparo:</h2> <br />

                <li>Em um processador, coloque o peito de frango
                 sem osso e triture.</li><br />

                <li>Transfira para um recipiente, tempere com sal, pimenta e outros temperos que preferir (alho ralado, chimichurri, pimenta caiena, páprica…).</li><br />

                <li>Adicione a cebola picada, uma colher de sopa da farinha de aveia e misture bem.</li><br />

                <li>Molde a massa em formato de hambúrguer. Se preferir, use uma balança para deixar todos com a mesma quantidade.</li><br />

                <li>Após fazer os hambúrgueres, empane cada um na farinha de aveia.</li><br />

                <li>Congele ou frite na hora.</li></ul>
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

export default modeloReceita1