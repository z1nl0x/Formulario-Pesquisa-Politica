import React, { useState } from "react";

const ResearchElectionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [instruction, setInstruction] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const instructionChangeHandler = (e) => {
    setInstruction(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const researchData = {
      name,
      email,
      age,
      instruction,
    };

    console.log(researchData);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="group-control">
          <div className="form-control">
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>

          <div className="form-control">
            <label htmlFor="idade">Idade</label>
            <input id="idade" type="number" />
          </div>

          <div className="form-control">
            <label htmlFor="grauInstrucao">Grau de Instrução</label>
            <select name="grauInstrucao" id="grauInstrucao" required>
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
          </div>

          <div className="form-control">
            <p htmlFor="espectroPolitico">
              Com qual espectro político você se identifica mais, escolha apenas
              uma opção:
            </p>
            <div className="radio-options">
              <input
                id="espectroPolitico"
                type="radio"
                value="centro"
                name="fav_espectro"
              />
              <label>Centro </label>
            </div>
            <div className="radio-options">
              <input
                id="espectroPolitico"
                type="radio"
                value="centro"
                name="fav_espectro"
              />
              <label>Centro-direita </label>
            </div>
            <div className="radio-options">
              <input
                id="espectroPolitico"
                type="radio"
                value="centro"
                name="fav_espectro"
              />
              <label>Centro-esquerda </label>
            </div>
            <div className="radio-options">
              <input
                id="espectroPolitico"
                type="radio"
                value="centro"
                name="fav_espectro"
              />
              <label>Extrema-direita </label>
            </div>
            <div className="radio-options">
              <input
                id="espectroPolitico"
                type="radio"
                value="centro"
                name="fav_espectro"
              />
              <label>Extrema-esquerda </label>
            </div>
          </div>

          <div className="form-control">
            <p htmlFor="partidoPolitico">
              Com qual ou quais partidos políticos você se identifica::
            </p>
            <div className="check-options">
              <input type="checkbox" id="psl" name="part_check" value="psl" />
              <label htmlFor="psl">Partido Social Liberal (PSL)</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="pt" name="part_check" value="pt" />
              <label htmlFor="pt">Partido dos Trabalhadores (PT)</label>
            </div>

            <div className="check-options">
              <input type="checkbox" id="pl" name="part_check" value="pl" />
              <label htmlFor="pl">Partido Liberal (PL)</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="pp" name="part_check" value="pp" />
              <label htmlFor="pp">Progressista (PP)</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="psd" name="part_check" value="psd" />
              <label htmlFor="psd">Partido Social Democrático (PSD)</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="mdb" name="part_check" value="mdb" />
              <label htmlFor="mdb">
                Movimento Democrático Brasileiro (MDB)
              </label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="psdb" name="part_check" value="psdb" />
              <label htmlFor="psdb">
                Partido da Social Democracia Brasileira (PSDB)
              </label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="rep" name="part_check" value="rep" />
              <label htmlFor="rep">Republicanos</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="psb" name="part_check" value="psb" />
              <label htmlFor="psb">Partido Socialista Brasileiro (PSB)</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="ppp" name="part_check" value="ppp" />
              <label htmlFor="ppp">Bloco PROS, PSC, PTB</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="dem" name="part_check" value="dem" />
              <label htmlFor="dem">Democratas (DEM)</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="pdt" name="part_check" value="pdt" />
              <label htmlFor="pdt">Partido Democrático Trabalhista (PDT)</label>
            </div>
            <div className="check-options">
              <input
                type="checkbox"
                id="solidariedade"
                name="part_check"
                value="solidariedade"
              />
              <label htmlFor="solidariedade">Solidariedade</label>
            </div>
            <div className="check-options">
              <input
                type="checkbox"
                id="podemos"
                name="part_check"
                value="podemos"
              />
              <label htmlFor="podemos">Podemos (PODE)</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="psol" name="part_check" value="psol" />
              <label htmlFor="psol">
                Partido Socialismo e Liberdade (PSOL)
              </label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="novo" name="part_check" value="novo" />
              <label htmlFor="novo">Partido Novo (NOVO)</label>
            </div>
            <div className="check-options">
              <input
                type="checkbox"
                id="avante"
                name="part_check"
                value="avante"
              />
              <label htmlFor="avante">Avante</label>
            </div>
            <div className="check-options">
              <input
                type="checkbox"
                id="pcdob"
                name="part_check"
                value="pcdob"
              />
              <label htmlFor="pcdob">Partido Comunista do Brasil (PCdoB)</label>
            </div>
            <div className="check-options">
              <input
                type="checkbox"
                id="cidadania"
                name="part_check"
                value="cidadania"
              />
              <label htmlFor="cidadania">Cidadania</label>
            </div>
            <div className="check-options">
              <input
                type="checkbox"
                id="patriota"
                name="part_check"
                value="patriota"
              />
              <label htmlFor="patriota">Patriota</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="pv" name="part_check" value="pv" />
              <label htmlFor="pv">Partido Verde (PV)</label>
            </div>
            <div className="check-options">
              <input type="checkbox" id="pv" name="part_check" value="pv" />
              <label htmlFor="pv">Rede Sustentabilidade (REDE)</label>
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="w3review">Entre com alguma observação:</label>

            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
            ></textarea>
          </div>
        </div>
        <div className="group-control">
          <button>Enviar</button>
        </div>
      </form>
    </>
  );
};

export default ResearchElectionForm;
