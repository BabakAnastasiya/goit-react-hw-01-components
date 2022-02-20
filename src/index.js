import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App'
import './index.css';
import profiles from './components/social-profile/user.json'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// const profile = 
// {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }
const profile = profiles;

function Profile (props){
  console.log(props);
  return <div class="profile">
<div class="description">
  <img
    src={props.url}
    alt="User avatar"
    class="avatar"
  />
  <p class="name">{props.username}</p>
  <p class="tag">{props.tag}</p>
  <p class="location">{props.location}</p>
</div>

<ul class="stats">
  <li>
    <span class="label">Followers : </span>
    <span class="quantity">{props.followers}</span>
  </li>
  <li>
    <span class="label">Views : </span>
    <span class="quantity">{props.views}</span>
  </li>
  <li>
    <span class="label">Likes : </span>
    <span class="quantity">{props.likes}</span>
  </li>
</ul>
</div>}


ReactDOM.render(<Profile url={profile.avatar} username={profile.username} tag={profile.tag} location={profile.location} followers={profile.stats.followers} views ={profile.stats.views} likes ={profile.stats.likes} />, document.getElementById('root'),);
