import bat from "../public/lme.jpg";
import "./styles.css";

export function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img src={bat} className="avatar" alt="literally me" />;
}
function Intro() {
  return (
    <div>
      <h1 className="h1">Dev Nobody</h1>
      <p>
        I am so happy to do this projects by udemy course of react. It's really
        fun and informative.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skills skill="react" level="****" color="red" />
      <Skills skill="git/github" level="***" color="blue" />
      <Skills skill="linux" level="***" color="yellow" />
      <Skills skill="javaScript" level="*****" color="green" />
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.level}</span>
    </div>
  );
}
