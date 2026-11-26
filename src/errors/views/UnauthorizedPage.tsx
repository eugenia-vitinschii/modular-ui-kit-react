import { useNavigate } from "react-router-dom";
import { MukErrorPageState } from "../components/MukErrorPageState";

function UnauthorizedView() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/login");
  }

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper error-page-wrapper">
          <MukErrorPageState
            code="401"
            title="Session Expired"
            buttonText="log in"
            onAction={goHome}
            description="Your session has expired for security reasons. Please log in again to continue working."
          />
        </div>
      </div>
    </div>
  );
}

export default UnauthorizedView;
