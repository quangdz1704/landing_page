import { useEffect, useState } from "react";
import { Theme, ToastContainer, Id as ToastId, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Audio from "./components/AudioPlayer";
import BannerSwiper from "./components/Banner";
import { THEME_CONFIG } from "./constants";
import ParticlesCanvas from "./components/Particles";

function App() {
  const [count, setCount] = useState(0);
  const [readyPlayAudio, setReadyPlayAudio] = useState(false);
  const [theme, _setTheme] = useState(
    localStorage.getItem("theme") || THEME_CONFIG.LIGHT
  );

  console.log("readyPlayAudio", readyPlayAudio);

  useEffect(() => {
    if (
      theme === THEME_CONFIG.DARK ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // set local theme
    localStorage.setItem("theme", theme);
  }, [theme]);

  const removeToast = (toastId?: ToastId) => {
    if (toastId) {
      toast.dismiss(toastId);
      return;
    }
    // Remove all toasts !
    toast.dismiss(toastId);
  };

  const showToast = () => {
    toast(
      <div className="">
        <p className="flex justify-center items-center">
          Do you want play music?
        </p>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="bg-pink-2 border-pink-3 rounded w-20 h-10 mr-4 outline-none"
            onClick={() => {
              setReadyPlayAudio((ready) => !ready);
              removeToast();
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className="bg-gray-2 border-gray-3 rounded w-20 h-10"
            onClick={() => {
              removeToast();
            }}
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme as Theme,
      }
    );
  };

  useEffect(() => {
    // do something...

    // return () => {
    setReadyPlayAudio(false);
    removeToast();
    showToast();
    // };
  }, []);

  return (
    <div className="w-full h-screen bg-pink-1">
      <BannerSwiper />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            setReadyPlayAudio((ready) => !ready);
          }}
        >
          count is {count} {readyPlayAudio ? "Playing Music" : "Pause Music"}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={false}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme as Theme}
        closeButton={false}
      />
      <Audio readyPlay={readyPlayAudio} />
      <ParticlesCanvas />
    </div>
  );
}

export default App;
