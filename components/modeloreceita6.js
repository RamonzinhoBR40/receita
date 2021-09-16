import Image from 'next/image'
import styles from '../styles/Components.module.css'

function modeloreceita6(){
    return (
        <div className={styles.receita}>
            <div className={styles.image}> 
                <p><h2>Suco de Abacaxi</h2></p>           
                <Image src = "/abacaxi.png" width={400} height={270}/>                            
            </div>

            <div className={styles.texto}>
                
                <ul><h2>Ingredientes: </h2><br />
               
                <li>1 abacaxi maduro</li><br />
                <li>10 folhas de hortelã</li><br />
                <li>1 litro de água</li><br />
                <li>10 pedras gelo</li><br />
                <li>Açúcar ou adoçante a gosto</li><br />

                <h2>Modo de Preparo </h2><br />

                <li>Descasque o abacaxi e bata no liquidificador com as folhas de hortelã.</li><br />

                <li>Coloque a água, o açúcar e 5 pedras de gelo e bata por 3 minutos.</li><br />

                <li>Coloque o restante do gelo na jarra de suco ou nos copos a serem servidos.</li><br />

                <li>Rende 5 copos de 200 ml.</li></ul>
            </div>
        </div>
    )
}

export default modeloreceita6