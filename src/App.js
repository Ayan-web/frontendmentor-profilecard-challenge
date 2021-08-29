import './App.css';

function App() {
  return (
    <main>
    <div className="cardClass">
      <div className="cardPattern"></div>
      <div style={{display:'grid',placeItems:'center'}}>
          <div className="profilepic"></div>
          <span className="nameage"><strong>Victor Crest</strong> 26</span>
          <p style={{position:'relative',bottom:'20px'}}>London</p>
      </div>
    <hr></hr>
    <div className="status">
      <span className="statusitem">
          <strong>80K</strong>
          <p>Followers</p>
      </span>
      <span className="statusitem">
          <strong>803K</strong>
          <p>Likes</p>
      </span>
      <span className="statusitem">
        <strong>1.4K</strong>
        <p>Photo</p>
      </span>
    </div>
    </div>
    </main>
  );
}

export default App;
