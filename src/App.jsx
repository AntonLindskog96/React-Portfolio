import styles from "./App.module.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profileImage/profile";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Profile />
        <About />
      </div>
    </>
  );
}

export default App;
