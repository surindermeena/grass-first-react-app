 
 
const ErrorComponent = () =>{

    return (
    <>
    <div style={car}>
    <div style={container}>
        <div style={errorCode}>404</div>
        <div style={errormessage}>Oops! Page not found.</div>
        <p>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
        </p>

    </div>
    </div>

    </>
    );
};



const car = {
    fontfamily: "Arial",
    backgroundColor: "#f2f2f2",
    margin: "0px",
    padding: "0px",
};

const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
};

const errorCode = {
    fontSize: "100px",
    fontWeight: "bold",
    color: "#e74c3c",
    marginBottom: "20px",
};

const errormessage = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
};


export default ErrorComponent;