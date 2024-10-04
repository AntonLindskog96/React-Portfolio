import styles from "./App.module.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profileImage/profile";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Profile />
      </div>
    </>
  );
}

export default App;
