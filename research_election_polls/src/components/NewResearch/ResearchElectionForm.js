import { useState, useEffect } from "react";
import useInput from "../../hooks/use-input";
import styles from "./ResearchElectionForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isCheckBox = (value) => value.length > 1;
const isEmail = (value) => /^\S+@\S+\.\S+$/.test(value);
const isAge = (value) => value.trim() !== "" && value <= 100;
const isNotInstruction = (value) =>
  value.trim() !== "" && value !== "Selecione uma opção";
const isObs = (value) => value.trim() !== "" || value.trim() === "";

const partidosPoliticos = {
  PSL: "psl",
  PT: "pt",
  PL: "pl",
  PP: "pp",
  PSD: "psd",
  MDB: "mdb",
  PSDB: "psdb",
  REP: "rep",
  PSB: "psb",
  PPP: "ppp",
  DEM: "dem",
  PDT: "pdt",
  SOLIDARIEDADE: "solidariedade",
  PODE: "podemos",
  PSOL: "psol",
  NOVO: "novo",
  AVANTE: "avante",
  PCDOB: "pcdob",
  CIDADANIA: "didadania",
  PATRIOTA: "patriota",
  PV: "pv",
  REDE: "rede",
};

const ResearchElectionForm = (props) => {
  const [keyRadio, setRadioKey] = useState(1);
  const [keyCheck, setCheckKey] = useState(0);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: ageValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isAge);

  const {
    value: instructionValue,
    isValid: instructionIsValid,
    hasError: instructionHasError,
    valueChangeHandler: instructionChangeHandler,
    inputBlurHandler: instructionBlurHandler,
    reset: resetInstruction,
  } = useInput(isNotInstruction);

  const {
    value: specValue,
    isValid: specIsValid,
    hasError: specHasError,
    valueChangeHandler: specChangeHandler,
    inputBlurHandler: specBlurHandler,
    reset: resetSpec,
  } = useInput(isNotEmpty);

  const {
    value: partidosValue,
    checkArr: checkPartidos,
    valueChangeHandlerCheckBox: partidosChangeHandler,
    isValid: partidosArrIsValid,
    checkHasError: partidosHasError,
    inputBlurHandler: partidosBlurHandler,
    reset: resetPartidos,
  } = useInput(isCheckBox);

  const {
    value: obsValue,
    isValid: obsIsValid,
    hasError: obsHasError,
    valueChangeHandler: obsChangeHandler,
    inputBlurHandler: obsBlurHandler,
    reset: resetObs,
  } = useInput(isObs);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const researchData = {
      nameValue,
      emailValue,
      ageValue,
      instructionValue,
      specValue,
      checkPartidos,
      obsValue,
    };

    props.onEnterResearch(researchData);

    setRadioKey((k) => k + 1);
    setCheckKey((k) => k + 2 * 17);
    resetName();
    resetEmail();
    resetAge();
    resetSpec();
    resetPartidos();
    resetObs();
    resetInstruction();
  };

  let formIsValid = false;

  if (
    nameIsValid &&
    emailIsValid &&
    ageIsValid &&
    instructionIsValid &&
    specIsValid &&
    partidosArrIsValid
  ) {
    formIsValid = true;
  }
  return (
    <>
      <form onSubmit={onSubmitHandler} className={styles["form-research"]}>
        <div className={styles["group-control-form"]}>
          <div className={styles["nome"]}>
            <label htmlFor="nome" className={styles["titles"]}>
              Nome:
            </label>
            <input
              id="nome"
              type="text"
              className={styles["input-text"]}
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <p className={styles["error-text"]}>Entre com um nome válido!</p>
            )}
          </div>

          <div className={styles["email"]}>
            <label htmlFor="email" className={styles["titles"]}>
              Email:
            </label>
            <input
              id="email"
              type="email"
              className={styles["input-text"]}
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={styles["error-text"]}>Entre com um email válido!</p>
            )}
          </div>

          <div className={styles["idade"]}>
            <label htmlFor="idade" className={styles["titles"]}>
              Idade:
            </label>
            <input
              id="idade"
              type="number"
              className={styles["input-text"]}
              value={ageValue}
              onChange={ageChangeHandler}
              onBlur={ageBlurHandler}
            />
            {ageHasError && (
              <p className={styles["error-text"]}>
                Entre com uma idade válida!
              </p>
            )}
          </div>

          <div className={styles["form-control-instruction"]}>
            <label htmlFor="grauInstrucao" className={styles["titles"]}>
              Grau de Instrução:
            </label>
            <select
              name="grauInstrucao"
              id="grauInstrucao"
              required
              value={instructionValue}
              onChange={instructionChangeHandler}
              onBlur={instructionBlurHandler}
            >
              <option value="Selecione uma opção">Selecione uma opção</option>
              <option value="Analfabeto">Analfabeto</option>
              <option value="Até 4ª série incompleta do 1º grau (ensino fundamental)">
                Até 4ª série incompleta do 1º grau (ensino fundamental)
              </option>
              <option value="4ª série completa do 1º grau (ensino fundamental)">
                4ª série completa do 1º grau (ensino fundamental)
              </option>
              <option value="5ª a 8ª série incompleta do 1º grau (ensino fundamental)">
                5ª a 8ª série incompleta do 1º grau (ensino fundamental)
              </option>
              <option value="1º grau completo (ensino fundamental)">
                1º grau completo (ensino fundamental)
              </option>
              <option value="2º grau incompleto (ensino médio)">
                2º grau incompleto (ensino médio)
              </option>
              <option value="2º grau completo (ensino médio)">
                2º grau completo (ensino médio)
              </option>
              <option value="Superior Incompleto">Superior Incompleto</option>
              <option value="Superior Completo">Superior Completo</option>
              <option value="Pós-Graduação/Especialização">
                Pós-Graduação/Especialização
              </option>
              <option value="Mestrado">Mestrado</option>
              <option value="Doutorado">Doutorado</option>
              <option value="Pós-Doutorado">Pós-Doutorado</option>
            </select>
            {instructionHasError && (
              <p className={styles["error-text"]}>
                Entre com uma instrução válida!
              </p>
            )}
          </div>

          <div
            className={styles["form-control"]}
            value={specValue}
            onChange={specChangeHandler}
            onBlur={specBlurHandler}
            key={keyRadio}
          >
            <p htmlFor="espectroPolitico" className={styles["titles"]}>
              Com qual espectro político você se identifica mais, escolha apenas
              uma opção:
            </p>
            <div className={styles["radio-options"]}>
              <input
                id="espectroPolitico"
                type="radio"
                value="centro"
                name="fav_espectro"
              />
              <label>Centro</label>
            </div>
            <div className={styles["radio-options"]}>
              <input
                id="espectroPolitico"
                type="radio"
                value="centro-direita"
                name="fav_espectro"
              />
              <label>Centro-direita</label>
            </div>
            <div className={styles["radio-options"]}>
              <input
                id="espectroPolitico"
                type="radio"
                value="centro-esquerda"
                name="fav_espectro"
              />
              <label>Centro-esquerda</label>
            </div>
            <div className={styles["radio-options"]}>
              <input
                id="espectroPolitico"
                type="radio"
                value="extrema-direita"
                name="fav_espectro"
              />
              <label>Extrema-direita</label>
            </div>
            <div className={styles["radio-options"]}>
              <input
                id="espectroPolitico"
                type="radio"
                value="extrema-esquerda"
                name="fav_espectro"
              />
              <label>Extrema-esquerda</label>
            </div>

            {specHasError && (
              <p className={styles["error-text"]}>
                Entre com um espectro político válido!
              </p>
            )}
          </div>

          <div
            className={styles["form-control"]}
            onBlur={partidosBlurHandler}
            key={keyCheck}
          >
            <p htmlFor="partidoPolitico" className={styles["titles"]}>
              Com qual ou quais partidos políticos você se identifica:
            </p>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="psl"
                name="part_check"
                value={partidosPoliticos.PSL}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="psl">Partido Social Liberal (PSL)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="pt"
                name="part_check"
                value={partidosPoliticos.PT}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="pt">Partido dos Trabalhadores (PT)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="pl"
                name="part_check"
                value={partidosPoliticos.PL}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="pl">Partido Liberal (PL)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="pp"
                name="part_check"
                value={partidosPoliticos.PP}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="pp">Progressista (PP)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="psd"
                name="part_check"
                value={partidosPoliticos.PSD}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="psd">Partido Social Democrático (PSD)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="mdb"
                name="part_check"
                value={partidosPoliticos.MDB}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="mdb">
                Movimento Democrático Brasileiro (MDB)
              </label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="psdb"
                name="part_check"
                value={partidosPoliticos.PSDB}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="psdb">
                Partido da Social Democracia Brasileira (PSDB)
              </label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="rep"
                name="part_check"
                value={partidosPoliticos.REP}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="rep">Republicanos</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="psb"
                name="part_check"
                value={partidosPoliticos.PSB}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="psb">Partido Socialista Brasileiro (PSB)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="ppp"
                name="part_check"
                value={partidosPoliticos.PPP}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="ppp">Bloco PROS, PSC, PTB</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="dem"
                name="part_check"
                value={partidosPoliticos.DEM}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="dem">Democratas (DEM)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="pdt"
                name="part_check"
                value={partidosPoliticos.PDT}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="pdt">Partido Democrático Trabalhista (PDT)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="solidariedade"
                name="part_check"
                value={partidosPoliticos.SOLIDARIEDADE}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="solidariedade">Solidariedade</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="podemos"
                name="part_check"
                value={partidosPoliticos.PODE}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="podemos">Podemos (PODE)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="psol"
                name="part_check"
                value={partidosPoliticos.PSOL}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="psol">
                Partido Socialismo e Liberdade (PSOL)
              </label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="novo"
                name="part_check"
                value={partidosPoliticos.NOVO}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="novo">Partido Novo (NOVO)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="avante"
                name="part_check"
                value={partidosPoliticos.AVANTE}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="avante">Avante</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="pcdob"
                name="part_check"
                value={partidosPoliticos.PCDOB}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="pcdob">Partido Comunista do Brasil (PCdoB)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="cidadania"
                name="part_check"
                value={partidosPoliticos.CIDADANIA}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="cidadania">Cidadania</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="patriota"
                name="part_check"
                value={partidosPoliticos.PATRIOTA}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="patriota">Patriota</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="pv"
                name="part_check"
                value={partidosPoliticos.PV}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="pv">Partido Verde (PV)</label>
            </div>
            <div className={styles["check-points"]}>
              <input
                type="checkbox"
                id="rede"
                name="part_check"
                value={partidosPoliticos.REDE}
                onChange={partidosChangeHandler}
              />
              <label htmlFor="pv">Rede Sustentabilidade (REDE)</label>
            </div>
            {partidosHasError && (
              <p className={styles["error-text"]}>
                Selecione pelo menos um partido político!
              </p>
            )}
          </div>

          <div className={styles["form-control"]}>
            <label htmlFor="w3review" className={styles["observacoes"]}>
              Entre com alguma observação:
            </label>

            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              className={styles["input-txtarea"]}
              value={obsValue}
              onChange={obsChangeHandler}
              onBlur={obsBlurHandler}
            ></textarea>
            {obsHasError && (
              <p className={styles["error-text"]}>
                Entre com uma observação válida!
              </p>
            )}
          </div>
        </div>
        <div className={styles["group-control-btn"]}>
          <button disabled={!formIsValid}>Enviar</button>
        </div>
      </form>
    </>
  );
};

export default ResearchElectionForm;
