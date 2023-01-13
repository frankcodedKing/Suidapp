import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
// import Counter from  "./components/Counter";
import CountdownTimer from "./components/CountdownTimer";

// import Button from '@mui/material/Button';


function App() {

 
  return (

    
    <div>
      <Navigation />

      {/* <!-- Masthead--> */}
      <header className="masthead"  style={{paddingTop: "150px"}}>
    <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center justify-content-center text-center">
            <div className="text-center text-light">
                <h2 className="mt-0 text-muted" >Airdrop Starts In</h2>

                {/* <Counter /> */}
                <CountdownTimer />
                
                <hr className="divider" />
                {/* <p className="text-muted mb-5">insert</p>  */}
            </div>

            <div className="col-lg-8 align-self-end rounded" style={{backgroundColor: "white", padding: "10px", width: "500px"}}>

                <p>Please send $100 to the Address to Qualify for this airdrop </p>
                <form action="/action_page.php">
                    {/* <div className="form-group" style={{margin: "10px"}}>
                        <label for="email">Email address:</label> 
                        <input type="email" className="form-control" placeholder="Enter email" id="email" />
                    </div>
                    <div className="form-group" style={{margin: "10px"}}>
                        <label for="pwd">Password:</label> 
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" /> Remember me
                        </label>
                    </div> */}
                    <a className="btn btn-primary rounded-pill" href="page">
                      <i className="fa fa-sign-in" aria-hidden="true"></i>Sent
                    </a>
                </form>
            </div>
        </div>
    </div>
</header>



      <Footer />
    </div>
  )
}

export default App;