

export const AlertCarrito = () => {

  return (
    <div
      id='alertCarrito'
      className="hidden"
      style={styles.container}
    >
    </div>
  )
}


const styles = {
  container: {
    position: 'fixed' as 'fixed',
    bottom: '25px',
    left: '25px',
    zIndex: '9999',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: '10px 0'
  }
}