// Q1 - Nested folder and file structure
import React, { useMemo, useState } from 'react'
import './App.css';
 
const FOLDER_TYPE = Symbol("folder");
const FILE_TYPE = Symbol("folder");
 
const folder = {
  name: "Home",
  children: [
    {
      type: FOLDER_TYPE,
      name: "Folder1",
      id: 123123123,
      children: [
        {
          type: FOLDER_TYPE,
          name: "Folder12",
          id: 123123123,
          children: [{
            type: FILE_TYPE,
            name: "File2",
          }],
        },
      ],
    },
    {
      type: FOLDER_TYPE,
      name: "Folder2",
      id: 234234,
      children: [{
        type: FILE_TYPE,
        name: "File3",
      }],
    },
    {
      type: FILE_TYPE,
      name: "File1",
    },
  ]
}
 
function Folder({ name, children=[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ isRendered, setIsRendered ] = useState(false);
 
  function handleClick () {
    setIsOpen(o => !o);
  }
 
  // const children = useMemo();
 
  return (
    <div>
      <span className="header_sec" onClick={handleClick}>
        {name}
      </span>
      <div className={isOpen ? "folder_content" : "folder_content closed"}>
        {children.map(child => {
          return child.type === FOLDER_TYPE ?
          <Folder
            name={child.name}
            children={child.children}
          /> :
          <File name={child.name} />
        })}
      </div>
    </div>
  );
}
 
function File({ name }) {
  return <span>{name}</span>;
}
 
function App() {
 
  return (
    <div className="app">
      <Folder
        name={folder.name}
        children={folder.children}
      />
    </div>
  )
}
 
export default App;


// Q2 - Infinite scrolling

import React, { useEffect, useMemo, useState } from 'react'
import './App.css';

const data = [{
  id: 213123, 
  name: "werwer"
}, {
  id: 213123, 
  name: "werwer"
}, {
  id: 213123, 
  name: "werwer"
}, {
  id: 213123, 
  name: "werwer"
}, {
  id: 213123, 
  name: "werwer"
}, {
  id: 213123, 
  name: "werwer"
}, {
  id: 213123, 
  name: "werwer"
}];

async function getData ( idx ) {
  return data.slice(0, data.length);
}

function Widget ({ id, name }) {

  return (
    <div className='widget'>
      {name}
    </div>
  );
}

function App1() {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if ( entry.isIntersecting ) {
            getData(data.length).then(resp => {
              console.log(data, resp);
              setData(data => ([ ...data, ...resp ]));
            });
          }
      });
  }, {
      root: null,
      rootMargin: "0px",
  });
    let target = document.querySelector("#dummy");

    observer.observe(target);
  }, []);

  useEffect(() => {
    // Fetch data
    getData(0).then(data => {
      setData(data);
    });
  }, []);

  return (
    <div className="app">
      {data.map(d =>
        <Widget 
          id={d.id} 
          name={d.name} 
          key={d.id}
        />
      )}
      <div id="dummy"></div>
    </div>
  )
}

export {App1};
