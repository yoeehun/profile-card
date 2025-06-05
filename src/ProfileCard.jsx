import './ProfileCard.css';
import myPhoto from './assets/me.jpg';

function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src={myPhoto}
        alt="Mark Aidel Ray D. Olaco"
        className="profile-image"
      />
      <h2>Jon Marco F. Pantilgan</h2>
      <p className="title">Student</p>
      <p><strong>Email:</strong> pantilgan.jonmarco30@gmail.com</p>
      <p><strong>Phone:</strong> +639623820490</p>

      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/pantilgan-jon-marco-760b53358/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/yoeehun" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;