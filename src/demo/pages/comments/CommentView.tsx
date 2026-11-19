import { useState } from "react";
import { MukCheckbox, MukCommentForm, MukCommentItem, MukIconButton, MukText } from "../../../lib";
import { MukRadio } from "../../../lib";

type ActionsMode = 'full' | 'likeOnly' | 'none';
type AvatarType = 'image' | 'default' | 'initials';
function CommentView() {

  const [actionsMode, setActionsMode] = useState<ActionsMode>('full');
  const [avatarType, setAvatarType] = useState<AvatarType>('image');
  const [showAbout, setShowAbout] = useState(true);

  const [isLiked, setIsliked] = useState(false);
  const [likedCount, setLikedCount] = useState(12);

  const togleLike = () => {
    const nextIsLiked = !isLiked;
    setIsliked(nextIsLiked);
    setLikedCount((prev) => prev + (nextIsLiked ? 1 : -1))
  }

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
              <MukText>Actions</MukText>
              <div className="demo-controls--row">
                <MukRadio name="comments-action-demo" label="Full"
                value="full"
                selectedValue={actionsMode}
                onChange={(val) => setActionsMode(val as ActionsMode)}
                />
                <MukRadio name="comments-action-demo" label="Like Only"
                value="likeOnly"
                selectedValue={actionsMode}
                onChange={(val) => setActionsMode(val as ActionsMode)}
                />
                <MukRadio name="comments-action-demo" label="None"
                value="none"
                selectedValue={actionsMode}
                onChange={(val) => setActionsMode(val as ActionsMode)}
                />
              </div>
               <MukText>Avatar</MukText>
              <div className="demo-controls--row">
                <MukRadio name="comments-avatar-demo" label="Img"
                value="image"
                selectedValue={avatarType}
                onChange={(val) => setAvatarType(val as AvatarType)}
                />
                <MukRadio name="comments-avatar-demo" label="Default"
                value="default"
                selectedValue={avatarType}
                onChange={(val) => setAvatarType(val as AvatarType)}
                />
                <MukRadio name="comments-avatar-demo" label="Initials"
                value="initials"
                selectedValue={avatarType}
                onChange={(val) => setAvatarType(val as AvatarType)}
                />
              </div>
              <MukText>About</MukText>
              <MukCheckbox
              label="Show about"
              value={showAbout}
              onChange={(val) => setShowAbout(val)}
              />
            </div>
          <div className="muk-comment-wrapper  muk-section">
              <MukCommentItem
                name="Eugenia Vitinschii" created="5 minutes ago"
                about={showAbout ? 'frontend dev' : undefined} authorProfile={"/"}
                avatarSrc={avatarType === 'image' ? 'https://i.pravatar.cc/150?img=5' : undefined}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi consequatur. Voluptatibus, animi"
                avatar={
                  avatarType === "initials" && ( <MukText type="muk-heading" variant="primary">EV</MukText>)
                }
                actions ={
                  <>
                  {actionsMode !== 'none' && (
                      <MukIconButton variant="ghost" size="sm" onClick={togleLike}
                      text={
                        likedCount
                      }
                      >
                        {isLiked ? (
                           <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                              fill="currentColor">
                              <path
                                 d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                           </svg>
                        ) :(
                           <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                              <path
                                 d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                           </svg>
                        )}
                      </MukIconButton>
                  )}
                  {actionsMode === "full" && (
                    <MukIconButton  variant="ghost" size="sm"
                      text="reply"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                              <path
                                 d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
                           </svg>
                    </MukIconButton>
                  )}
                  </>
                }
              />
              <MukCommentForm/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CommentView;
