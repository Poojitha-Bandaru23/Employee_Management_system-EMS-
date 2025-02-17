const Error = () => {
    // Inline styles
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        backgroundColor: '#f8d7da', // Light red background
        color: '#721c24', // Dark red text color
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      },
      heading: {
        fontSize: '48px',
        fontWeight: 'bold',
      },
      message: {
        fontSize: '24px',
      }
    };
  
    return (
      <div style={styles.container}>
        <div>
          <h1 style={styles.heading}>404: UnAuthorized</h1>
          <p style={styles.message}>You do not have permission to access this page.</p>
        </div>
      </div>
    );
  }
  
  export default Error;