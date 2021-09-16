import Image from 'next/image'
import styles from '../styles/Components.module.css'

function modeloreceita4(){
    return (
        <div className={styles.receita}>
            <div className={styles.image}> 
                <p><h2>Sopa Cremosa de Frango</h2></p>           
                <Image src = "/sopa.jpg" width={400} height={270}/>                            
            </div>

            <div className={styles.texto}>
                
                <ul><h2>Ingredientes: </h2><br />

                <li>100 g de mandioquinha descascada, cozida e cortada em rodelas</li><br />
                <li>100 g de cenoura descascada, cozida e cortada em rodelas</li><br />
                <li>2 e 1/2 xícaras de chá da água do cozimento dos legumes</li><br />
                <li>100 g de peito de frango cozido, desfiado e temperado</li><br />
                <li>Cebolinha picadinha e pimenta-do-reino a gosto</li><br />
                <li>Sal a gosto</li></ul>

                <ul><h2>Modo de preparo:</h2> <br />

                <li>Reúna todos os ingredientes;</li><br />

                <li>Coloque a mandioquinha, a cenoura, a água do cozimento e o sal no liquidificador, e bata até atingir uma mistura homogênea;</li><br />

                <li>Despeje a sopa em uma tigela, acrescente o frango desfiado, a cebolinha e a pimenta e misture. Esquente a sopa no micro-ondas, ou no fogo (neste caso, transfira a sopa para uma panela), e sirva na sequência;</li><br />

                <li>Sugerimos que sirva sua sopa cremosa de frango com legumes junto com queijo parmesão ralado e com uma fatia de pão ou torrada. Além do mais, você pode usar sobras de um frango ao molho ou assado para fazer esta receita. Capriche e tenha um bom apetite!</li><br />
                </ul>
            </div>
        </div>
    )
}

export default modeloreceita4