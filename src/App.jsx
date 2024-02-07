import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainPage from "./pages/mainPage";
import PopUp from "./components/popUp/popUp";

function App() {
  const [openBox, setBox] = useState(true);

  // useEffect(()=>{
  //   setBox(true)

  // },[])

  const closeModal = () => {
    setBox(false);
  };

  return (
    <div className="relative">
      <MainPage />
      {openBox && (
        <>
          <PopUp hehe={closeModal} />
          <div className="absolute inset-0 bg-black bg-opacity-55 z-40"></div>
        </>
      )}
    </div>
  );
}

export default App;
