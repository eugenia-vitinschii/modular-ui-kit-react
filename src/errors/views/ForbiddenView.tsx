import { useNavigate } from "react-router-dom";
import { MukErrorPageState } from "../components/MukErrorPageState";

function ForbiddenView() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper error-page-wrapper">
          <MukErrorPageState
            code="403"
            title="Access Denied"
            buttonText="go to home"
            onAction={goHome}
            description="You don't have permission to view this page. If you think this is a mistake, please contact your system administrator"
          />
        </div>
      </div>
    </div>
  );
}

export default ForbiddenView;
