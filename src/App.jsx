import Student from './assets/std';
function App() {
  return (
    <>
      <h1>SPOTNACK STUDENT CARD</h1>
      <div className="a">
      <div className="std">
        <Student
        name="Prince"
        image="/1.jpg"
        dob="dd/mm/yyyy"
        cource="B.Sc(it)"
        role="Frountend Developer"
        college="abc college"
        />

        <Student
        name="Ram"
        image="/2.jpg"
        dob="dd/mm/yyyy"
        cource="B.Sc(it)"
        role="Frountend Developer"
        college="def college"
        />

        <Student
        name="shruthi"
        image="/3.jpg"
        dob="dd/mm/yyyy"
        cource="B.Sc(it)"
        role="Frountend Developer"
        college="hig college"
        />
      </div>
      </div>
</>
);
}

export default App;
