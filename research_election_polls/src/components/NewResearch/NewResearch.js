import React from "react";
import useHttp from "../../hooks/use-http";
import ResearchElectionForm from "./ResearchElectionForm";

const NewResearch = () => {
  const { isLoading, error, sendRequest: sendResearchRequest } = useHttp();

  const createResearch = (researchObject, researchData) => {
    const generatedId = researchData.name;
    const createdResearch = { id: generatedId, research: researchObject };

    // props.onAddResearch(createdResearch);
  };

  const enterResearchHandler = async (researchObject) => {
    sendResearchRequest(
      {
        url: `${process.env.REACT_APP_URL}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { research: researchObject },
      },
      createResearch.bind(null, researchObject)
    );
  };

  return (
    <div>
      <ResearchElectionForm onEnterResearch={enterResearchHandler} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewResearch;
