import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";


export default function Home() {
  const dispatch=useDispatch()
  const users = useSelector(state => state.users || []);
    console.log(users);
    
    function handleDelete(id){
      dispatch(deleteUser({id:id}))
    }
  return (
    <div className="container">
      <h2>Crud App with Json Server</h2>
      <Link to='/create' className='btn btn-success my-3'>Create +</Link>
      <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name </th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    {users.length > 0 && users.map((data) => (
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
                <Link to={`/edit/${data.id}`} className="btn btn-primary btn-sm">Edit</Link>
                <button className="btn btn-danger btn-sm mx-2" onClick={()=>handleDelete(data.id)}>Delete</button>
            </td>
        </tr>
    ))}
</tbody>
      </table>
    </div>
  )
}
