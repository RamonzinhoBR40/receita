import Image from 'next/image'
import styles from '../styles/Components.module.css'

function modeloreceita3(){
    return (
        <div className={styles.receita}>
            <div className={styles.image}> 
                <p><h2>Fricassê de Frango</h2></p>           
                <Image src = "/fricasse.jpg" width={400} height={270}/>                            
            </div>

            <div className={styles.texto}>
                
                <ul><h2>Ingredientes: </h2><br />

                <li>1 lata de creme de leite</li><br />
                <li>1 lata de leite</li><br />
                <li>1 lata de caldo de frango (do cozimento)</li><br />
                <li>1 lata de milho</li><br />
                <li>1 copo de requeijão 200g</li><br />
                <li>1 colher de chá de sal</li><br />
                <li>1 colher de sopa de farinha de trigo</li><br />
                <li>2 colheres de sopa de azeite</li><br />
                <li>1/2 cebola picada</li><br />
                <li>2 dentes de alho</li><br />
                <li>3 peitos de frango cozido e desfiado</li><br />
                <li>1 colher de chá de sal</li><br />
                <li>4 colheres de molho de tomate</li><br />
                <li>50g de azeitona picada</li><br />
                <li>Pimenta do reino a gosto</li></ul>

                <ul><h2>Modo de preparo:</h2> <br />

                <li>Bata em um liquidificador: o creme de leite, leite, caldo de frango, milho, requeijão, sal e farinha de trigo.</li><br />

                <li>Em uma panela, adicione o azeite e refogue a cebola e o alho.</li><br />

                <li>Coloque na panela os peitos de frango, o molho de tomate, a azeitona e o creme batido no liquidificador.</li><br />

                <li>Adicione o sal e pimento a gosto.</li><br />

                <li>Deixe engrossar por 7 minutos.</li><br />

                <li>Coloque em uma travessa o creme.</li><br />

                <li>Adicione mussarela (a gosto) e finalize com 1 pacote de batata palha.</li><br />

                <li>Leve ao forno pré-aquecido 180 graus por aproximadamente 20 minutos.</li><br />                
               </ul>
            </div>
        </div>
    )
}

export default modeloreceita3