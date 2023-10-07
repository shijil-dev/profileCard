import bat from "../public/lme.jpg";
import "./styles.css";

export function App() {
  const skills = ["react", "git/github", "linux"];
  return (
    <div className="card">
      <Avatar />
      <Intro />
      {skills.map((skill) => (
        <Skills skill={skill} />
      ))}
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src={bat} className="avatar" />
    </div>
  );
}
function Intro() {
  return (
    <p>
      I am a nobody who is lurking here and there. I am learning things that I
      like currently Its React and I love it.
    </p>
  );
}

function Skills(props) {
  return <h3>{props.skill}</h3>;
}
