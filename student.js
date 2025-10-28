const Student=(props)=>{
return(
    <tr>
        <td>{props.detail.id}</td>
        <td>{props.detail.name}</td>
        <td>{props.detail.emai}</td>
    </tr>
)
}
const StudentList = () =>{
    let students=[
        {
        id:1,
        name:"ganesh",
        email:"ganesh@gmail.com"
    },
    {
    id:2,
    name:"suchitha",
    email:"suchitha@gamil.com",
}
    ];
    return(
        <>
        <h1>student list</h1>
        <table>
        <thead>
        <tr>
    <th>id</th>
    <th>name</th>
    <th>email</th>
        </tr>
        </thead>
<tbody>{students.map((data) => <Student key={data.id} detail={data}/>)}</tbody>
</table>
</>
    )
}
export default StudentList;
