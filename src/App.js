import bat from "../public/lme.jpg";
import "./styles.css";
const skills = [
  {
    name: "react",
    level: "***",
    color: "red",
  },
  {
    name: "git github",
    level: "****",
    color: "blue",
  },
  {
    name: "linux",
    level: "****",
    color: "yellow",
  },
  {
    name: "javscript",
    level: "*****",
    color: "green",
  },
];
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
      {skills.map((skill) => (
        <Skills skill={skill} />
      ))}
    </div>
  );
}

function Skills({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.name}</span>
      <span>
        {skill.level === "***" && "👶"}
        {skill.level === "****" && "👍"}
        {skill.level === "*****" && "💪"}
      </span>

      <span>{skill.level}</span>
    </div>
  );
}
