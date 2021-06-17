import './App.css';
import AgentsReports from './Components/AgentsReports';
import CallReports from './Components/CallReports';
import DialReports from './Components/DialReports';
import AgentsInboundReports from './Components/AgentsInboundReports';
import AgentsOutboundReports from './Components/AgentsOutboundReports';



function App() {
  return (
    <div className="container text-center">

      <div className="row mt-5">
        <div className="col-9 col-sm-9 col-md-6 col-lg-3 col-xl-3 mx-auto rounded p-3" style={{backgroundColor: "#919191"}}>
          <AgentsReports />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-9 col-sm-9 col-md-6 col-lg-3 col-xl-3 mx-auto rounded p-3" style={{backgroundColor: "#919191"}}>
          <AgentsInboundReports />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-9 col-sm-9 col-md-6 col-lg-3 col-xl-3 mx-auto rounded p-3" style={{backgroundColor: "#919191"}}>
          <AgentsOutboundReports />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-9 col-sm-9 col-md-6 col-lg-3 col-xl-3 mx-auto rounded p-3" style={{backgroundColor: "#919191"}}>
          <CallReports />
        </div>
      </div>

      <div className="row my-5">
        <div className="col-9 col-sm-9 col-md-6 col-lg-3 col-xl-3 mx-auto rounded p-3" style={{backgroundColor: "#919191"}}>
          <DialReports />
        </div>
      </div>

    

      
        
        
      
    </div>
  );
}

export default App;
