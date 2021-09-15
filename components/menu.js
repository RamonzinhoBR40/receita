import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link  from 'next/link'

function Menu(){
    return (
        <>
           <div className={styles.topo}>
            <div><h2>Receitas Rápidas</h2></div>
            <div><a><Image src="/frango.PNG" width={200} height={105} /></a></div>
            <div><input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" /></div>

           
        </div>   
        </>
    )
}

export default Menu