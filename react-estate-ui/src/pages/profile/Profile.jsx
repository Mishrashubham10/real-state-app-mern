import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './profile.scss';

const Profile = () => {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{' '}
              <img
                src="https://i.pinimg.com/474x/cd/d5/6c/cdd56c07fae204d378fb29450444b7aa.jpg"
                alt="Avatar Image"
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;