import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs'
import Display from './components/Display'
import Input from './components/Input';

function App() {
  const [post, setPost] = useState([{tab:"Starter Tab", Content:"Feel free to input any new tabs or messages below"}]);
  const [currentTab, setCurrentTab] = useState("Starter Tab")

  return (
    <div className="App">
      <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} post={post}/>
      <Display currentTab={currentTab} post={post}/>
      <Input post={post} setPost={setPost}/>
    </div>
  );
}

export default App;
