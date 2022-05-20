import { CardComponent } from "../../components/screensComponents/CardComponent"
import { ChangeTheme } from "../../helpers/changeTheme"
import { useAnimation } from "../../hooks/useAnimation"


export const MenuScreen = () => {

  ChangeTheme({
    id: [
      'titlePizzas',
      'titleAcompañamientos',
      'titlePostres',
    ], is: 'title'
  })

  useAnimation({
    element: [
      'pizzasContainer',
      'acompañamientosContainer',
      'postresContainer'
    ],
    name: ['animate__zoomInDown']
  })

  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        <div id='introMenu' style={styles.introContainer}>
          <img src='../assets/pizza-logo-dark.png' style={styles.imgImgMain} />
          <p style={styles.textImgMain}>Mira lo que tenemos para ofrecerte:</p>
        </div>
      </div>

      <div style={styles.menuContainer}>

        <h4 id='titlePizzas' style={{
          ...styles.title,
          marginTop: 0
        }}>Pizzas</h4>

        <div id='pizzasContainer' style={styles.itemMenuContainer}>
          <div className='menuItemContainer' style={styles.cards}>
            <CardComponent fromMenu={true} index={'1'} />
            <CardComponent fromMenu={true} index={'2'} />
            <CardComponent fromMenu={true} index={'3'} />
            <CardComponent fromMenu={true} index={'4'} />
            <CardComponent fromMenu={true} index={'5'} />
            <CardComponent fromMenu={true} index={'6'} />
            <CardComponent fromMenu={true} index={'7'} />
            <CardComponent fromMenu={true} index={'8'} />
            <CardComponent fromMenu={true} index={'9'} />
            <CardComponent fromMenu={true} index={'10'} />
            <CardComponent fromMenu={true} index={'11'} />
            <CardComponent fromMenu={true} index={'12'} />
          </div>
        </div>

        <hr style={styles.hr} />


        <h4 id='titleAcompañamientos' style={styles.title}>Acompañamientos</h4>

        <div id='acompañamientosContainer' style={styles.itemMenuContainer}>
          <div className='menuItemContainer' style={styles.cards}>
            <CardComponent fromMenu={true} index={'13'} />
            <CardComponent fromMenu={true} index={'14'} />
            <CardComponent fromMenu={true} index={'15'} />
            <CardComponent fromMenu={true} index={'16'} />
            <CardComponent fromMenu={true} index={'17'} />
            <CardComponent fromMenu={true} index={'18'} />
            <CardComponent fromMenu={true} index={'19'} />
            <CardComponent fromMenu={true} index={'20'} />
            <CardComponent fromMenu={true} index={'21'} />
            <CardComponent fromMenu={true} index={'22'} />
            <CardComponent fromMenu={true} index={'23'} />
            <CardComponent fromMenu={true} index={'24'} />
          </div>
        </div>

        <hr style={styles.hr} />


        <h4 id='titlePostres' style={styles.title}>Postres</h4>

        <div id='postresContainer' style={styles.itemMenuContainer}>
          <div className='menuItemContainer' style={styles.cards}>
            <CardComponent fromMenu={true} index={'25'} />
            <CardComponent fromMenu={true} index={'26'} />
            <CardComponent fromMenu={true} index={'27'} />
            <CardComponent fromMenu={true} index={'28'} />
            <CardComponent fromMenu={true} index={'29'} />
            <CardComponent fromMenu={true} index={'30'} />
            <CardComponent fromMenu={true} index={'31'} />
            <CardComponent fromMenu={true} index={'32'} />
            <CardComponent fromMenu={true} index={'33'} />
            <CardComponent fromMenu={true} index={'34'} />
            <CardComponent fromMenu={true} index={'35'} />
            <CardComponent fromMenu={true} index={'36'} />
          </div>
        </div>

      </div>

    </div>
  )
}


const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  imgContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    borderBottom: '15px solid rgb(145, 14, 14)',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)',
    minHeight: '550px',
    maxHeight: '550px',
    background: 'url(../assets/menuImg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0px',
    margin: '0px',
  },
  introContainer: {
    position: 'absolute' as 'absolute',
    top: '35%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    width: '80%'
  },
  imgImgMain: {
    width: '175px',
  },
  textImgMain: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
    textShadow: '2px 2px 3px #000'
  },

  // Menu container
  menuContainer: {
    width: '100%',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    letterSpacing: '1px',
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'rgb(145, 14, 14)',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    marginTop: '20px'
  },
  hr: {
    width: '90%',
    height: '2px',
    color: 'rgb(145, 14, 14)',
    opacity: 1,
    margin: '0 30px 15px 30px',
    boxShadow: '0px 0px 5px 2x rgba(145, 14, 14, 0.5)'
  },
  itemMenuContainer: {
    width: '90%',
    display: 'flex',
    // backgroundColor: 'rgba(145, 14, 14, 0.9)',
    backgroundColor: 'rgb(33, 33, 60)',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    marginBottom: '60px',
    opacity: 0,
    padding: '20px',
    boxShadow: 'inset 0px 0px 7px 5px rgba(0, 0, 0, 0.5)',
  },
  cards: {
    display: 'flex',
    width: '100%',
    overflowX: 'auto' as 'auto',
    alignItems: 'center',
    marginTop: '5px',

    scrollbarWidth: 'thin' as 'thin',
    scrollbarColor: 'white transparent',   
  }

}