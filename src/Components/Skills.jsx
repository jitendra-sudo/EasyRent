import React from 'react';
import ReactLogo from './react.png';
import CSSLogo from './css.png';
import JSLogo from './js.png';
import HTMLLogo from './html.png';
import ReduxLogo from './redux.png';
import NodeJSLogo from './nodejs.png';
import MongoDBLogo from './MOngoDB.png';
import ChakraLogo from './chakra.png';
import GithubLogo from './github.png';
import VSCODELogo from './vscode.png';
import sql from './sql.png'
import Ts from './Ts.png'

function Skills() {
  return (
    <>
      <div className="skills" id='skilling'>
      <div className='skillcss' >
        <h1>Technical Skills & Tools</h1>
        <div className="skill-logos">
        <div className="skill">
          <img src={HTMLLogo} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src={CSSLogo} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src={JSLogo} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={ReduxLogo} alt="Redux" />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img src={NodeJSLogo} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <img src={ReactLogo} alt="React" />
          <p>React</p>
        </div>
        <div className="skill">
          <img className='mongoDb' src={MongoDBLogo} alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <img className='sql' src={sql} alt="MongoDB" />
          <p>SQL</p>
        </div>
        <div className="skill">
          <img src={ChakraLogo} alt="Chakra UI" />
          <p>Chakra UI</p>
        </div>
        <div className="skill">
          <img src={GithubLogo} alt="GitHub" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={VSCODELogo} alt="VSCode" />
          <p>VSCode</p>
        </div>
        <div className="skill">
          <img src={Ts} alt="TypeScript" />
          <p>TypeScript</p>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

