import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profileImage/profile";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Profile />
      </div>
    </>
  );
}

export default App;
