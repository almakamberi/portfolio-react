import './App.css';
import Timeline from './Components/Timeline';
import Header from './Components/Header';
import Scene from "./Components/Three";



function Title() {
  return (
    <div class="grid justify-items-center">
      <p class="text-grey-500">Hello, im</p>
      <h1 class="font-sans antialiased text-5xl text-black">Gjin Prelvukaj</h1>
    </div>
  );
}

function Announcment(){
  return(
    <div class="bg-indigo-600 px-4 py-3 text-white">
  <p class="text-center text-sm font-medium">
    Made with Tailwind CSS 
  </p>
</div>
  )
}

function App() {
  return (
<div class="w-full h-full">
<Scene />
</div>
  );
}

export default App;
