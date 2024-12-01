
import './App.css';
// import Intro from "./components/Intro";
// import FunctinalComp from "./components/FunctinalComp";
// import ArrowFunc from "./components/ArrowFunc";
// import ClassComp from "./components/ClassComp"
// import Prop from "./components/Prop";
import PropChild from "./components/PropChild";


function App() {
  return (
    <div className="App">
    {/* {/* <Intro />
    <FunctinalComp />
    <ArrowFunc />
    <ClassComp /> 
     */}

{/* Below is the example of Props and Children Props */}
{/* <Prop name = "Kiran" /> <Prop name = "Kiran" /> <Prop name = "Theju" /> */}
<PropChild name = "Ravi" ID = "ABC2024"> <p>This is example of children properties</p>
<button>Action</button>
</PropChild>

    </div>
  );
}

export default App;
