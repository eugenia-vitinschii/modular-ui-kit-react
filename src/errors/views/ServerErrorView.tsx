import { MukErrorPageState } from "../components/MukErrorPageState";

function  ServerErrorView() {
  function handeleReload() {
    window.location.reload();
  }

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper error-page-wrapper">
          <MukErrorPageState
            code="500"
            title="Internal Server Error"
            buttonText="try again"
            onAction={handeleReload}
            description="Something went wrong on our end. Our technical team has been notified, and we are working to fix the issue. Please try again later"
          />
        </div>
      </div>
    </div>
  );
}

export default ServerErrorView;
