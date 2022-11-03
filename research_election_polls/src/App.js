import styles from "./App.module.css";
import NewResearch from "./components/NewResearch/NewResearch";

function App() {
  return (
    <div className={styles.App}>
      <p className={styles["page-title"]}>PESQUISA POLÍTICA</p>
      <NewResearch />
    </div>
  );
}

export default App;
