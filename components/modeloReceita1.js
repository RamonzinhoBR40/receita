import Image from 'next/image'
import styles from '../styles/Home.module.css'

function modeloReceita1(){
    return (
        <div className={styles.receita}>
            <Image src = "/hamburguer.jpg" width={400} height={280}/>
            <div className={styles.texto}>
                <p>Hamburguer de Frango</p>
                <ul>Ingredientes: <br />

                400 g de peito de frango<br />
                Sal a gosto<br />
                Pimenta-do-reino a gosto<br />
                Tempero de sua preferência a gosto<br />
                1 cebola ralada<br />
                5 colheres de sopa de farinha de aveia</ul>

                <ul>Modo de preparo: <br />

                1-Em um processador, coloque o peito de frango sem osso e triture.<br />

                2-Transfira para um recipiente, tempere com sal, pimenta e outros temperos que preferir (alho ralado, chimichurri, pimenta caiena, páprica…).<br />

                3-Adicione a cebola picada, uma colher de sopa da farinha de aveia e misture bem.<br />

                4-Molde a massa em formato de hambúrguer. Se preferir, use uma balança para deixar todos com a mesma quantidade.<br />

                5-Após fazer os hambúrgueres, empane cada um na farinha de aveia.<br />

                6-Congele ou frite na hora.</ul>
            </div>
        </div>
    )
}

export default modeloReceita1