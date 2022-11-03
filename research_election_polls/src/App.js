import styles from "./App.module.css";
import ResearchElectionForm from "./components/ResearchElectionForm";

function App() {
  return (
    <div className={styles.App}>
      <p className={styles["page-title"]}>PESQUISA POLÍTICA</p>
      <ResearchElectionForm />
    </div>
  );
}

export default App;
