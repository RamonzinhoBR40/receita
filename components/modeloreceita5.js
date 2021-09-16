import Image from 'next/image'
import styles from '../styles/Components.module.css'

function modeloreceita5(){
    return (
        <div className={styles.receita}>
            <div className={styles.image}> 
                <p><h2>Bolinho de Abobrinha</h2></p>           
                <Image src = "/bolinho.jpg" width={400} height={270}/>                            
            </div>

            <div className={styles.texto}>
                
                <ul><h2>Ingredientes: </h2><br />

                <li>1 abobrinha grande ralada</li><br />
                <li>1 cebola ralada</li><br />
                <li>2 ovos</li><br />
                <li>Farinha de trigo o quanto baste para dar liga</li><br />
                <li>2 colheres de queijo parmesão ralado</li><br />
                <li>Salsinha a gosto</li><br />
                <li>Sal e pimenta do reino a gosto</li><br />
                <li>Óleo para fritar</li><br />

                <h2>Modo de Preparo: </h2><br />
                <li>Em uma tigela grande coloque todos os ingredientes,menos os ovos e a farinha de trigo.</li><br />
                <li>Bata os ovos e junte à mistura, depois acrescente a farinha até dar ponto, tem que ficar consistente para poder fritar sem desmanchar.</li><br />
                <li>Depois com uma colher pegue um pouco da massa e frite em óleo bem quente até dourar.</li><br />
                <li>Escorra em papel toalha e sirva em seguida.</li></ul>
            </div>
        </div>
    )
}

export default modeloreceita5