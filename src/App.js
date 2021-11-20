import Forecast from "./Forecast";
import HoursContainer from "./HoursContainer"
import DailysContainer from "./DailysContainer"

function App() {
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center text-white">
        <div className="col-md-8">
          <div id="bg" className="card bg-image">
            <Forecast/>
            <HoursContainer/>
            <DailysContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
