import { MukCommentItem, MukText } from "../../../lib";

function CommentView() {
  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
            Comment Preview
          </MukText>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
              <MukText type="muk-subheading">Demo controls</MukText>
              <MukCommentItem name="Eugenia Vitinschi" created="5 minutes ago"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi consequatur. Voluptatibus, animi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentView;
