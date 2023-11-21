import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
       {/* navbar */}
       <Nav/>
       {/* banner */}
      <Banner/>
       <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow/>
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies}/>
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
       {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> */}
       <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies}/>
       <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies}/> 
       
    </div>
  );
}

export default App;
