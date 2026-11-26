import { useNavigate } from "react-router-dom";
import { MukErrorPageState } from "../components/MukErrorPageState";

function NotFoundView() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper error-page-wrapper">
          <MukErrorPageState
            code="404"
            title="Page Not Found"
            buttonText="back to safety"
            onAction={goBack}
            description="Oops! The page you are looking for doesn't exist or has been moved. Double-check the URL or head back to the dashboard"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFoundView;
