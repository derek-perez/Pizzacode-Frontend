

export const Loading = () => {
    return (
        <div className="hidden" id='loadingComponent' style={styles.container}>
            <div style={styles.icon} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p style={styles.text}>Espere...</p>
        </div>
    )
}


const styles = {
    container: {
        position: 'fixed' as 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: '9999',
    },
    
    icon: {
        width: '75px',
        height: '75px',
        fontSize: '25px'
    },
    text: {
        fontSize: '30px',
        marginTop: '10px',
    }
}