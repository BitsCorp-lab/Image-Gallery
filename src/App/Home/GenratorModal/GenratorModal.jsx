import LoadingSvg from "../../../Assets/LoadingSvg";
import AppModel from "../../../Components/AppModel/AppModel";
import AppMultiInput from "../../../Components/AppMultiInput/AppMultiInput";
import "./GenratorModal.css";
import { useSelector, useDispatch } from "react-redux";
import {
  handleCollectionNames,
  handleProjectName,
  handleStage,
  handleModalState,
  handleReset,
} from "../../../Redux/Slices/GenratorX/genratorXSlice";
import {
  genrateApplication,
  downloadApplication,
} from "../../../Redux/Slices/GenratorX/GenratorXActions";

export const Stage1 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="stage1Con">
        <div className="appGenCon borderRight">
          <button
            onClick={() => dispatch(handleStage("stage2"))}
            className="appGenBtn"
          >
            Generate App
          </button>
          <p className="appDesc">
            Generates frontend and backend code then you can set up your
            Firebase credentials within the generated backend and begin
            interacting with your database through the generated frontend and
            backend{" "}
          </p>
        </div>
        <div className="appGenCon">
          <button className="appGenBtn">Generate Demo App</button>
          <p style={{ marginLeft: "12px" }} className="appDesc">
            Generates frontend and backend code then you can begin interacting
            with our virtual database thorugh generated frontend and backend
          </p>
        </div>
      </div>
    </>
  );
};

export const Stage2 = () => {
  const dispatch = useDispatch();

  let btnState = useSelector((state) => state.genratorX.downloadBtnState);
  let projectName = useSelector((state) => state.genratorX.projectName);
  let collectionNames = useSelector((state) => state.genratorX.collectionNames);
  let response = useSelector((state) => state.genratorX.response);

  const handleProjectNameValue = (event) => {
    dispatch(handleProjectName(event.target.value));
  };

  const getCollectionValues = (values) => {
    dispatch(handleCollectionNames(values));
  };

  const handleGenerate = () => {
    if (projectName.length !== 0 && collectionNames.length !== 0) {
      dispatch(genrateApplication(projectName, collectionNames));
    } else {
      alert("Please Check Your Project Name And Collection Names");
    }
  };

  const handleDownload = () => {
    dispatch(downloadApplication(projectName));
  };

  const hideAppGenModal = () => {
    dispatch(handleModalState("hide"));
    dispatch(handleReset());
  };
  return (
    <>
      <div className="stage2Con">
        <div className="leftCon">
          <p>Project Name</p>
          <input
            onChange={handleProjectNameValue}
            className="projectName"
          ></input>
          <p>Collections Name</p>
          <AppMultiInput getValues={getCollectionValues} />
        </div>
        <div className="rightCon">
          <div className="svgCon">
            <LoadingSvg />
          </div>
          <button onClick={handleDownload} disabled={btnState} className="btns">
            Download
          </button>
          <p style={{ textAlign: "center" }}>{response}</p>
          <div className="btnCon">
            <div className="docs">
              Collections name should be same as in database
            </div>
            <button onClick={hideAppGenModal} className="btns">
              Cancle
            </button>
            <button onClick={handleGenerate} className="btns">
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const GenratorModal = () => {
  let stage = useSelector((state) => state.genratorX.stage);
  return (
    <AppModel>
      {stage === "stage1" ? <Stage1 /> : null}
      {stage === "stage2" ? <Stage2 /> : null}
    </AppModel>
  );
};

export default GenratorModal;
