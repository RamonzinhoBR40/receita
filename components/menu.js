import styles from '../styles/Menu.module.css'

function Menu(){
    return (
        <>
          <div className={styles.div1}>        
            <h1>Receitas rápidas</h1>
            <input  
              type="text"
              id="pesquisa" 
              name="pesquisa" 
              value="Pesquisar receita" />    
          </div> 
        </>
    )
}

export default Menu