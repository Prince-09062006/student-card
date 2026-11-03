function Student(props){
    return(
        <div className="a">
        <div className="std-card">
            <div className="container">
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} />
            <h2>{props.dob}</h2>
            <h2>{props.cource}</h2>
            <h2>{props.role}</h2>
            <h2>{props.college}</h2>
        </div>
        </div>
        </div>
    );
}
export default Student;
