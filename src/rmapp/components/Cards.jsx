import { Link } from "react-router-dom"

export const Cards = ({ id, name, image }) => {


  return (
    <>
      <div className="card border border-success p-3 animate__animated animate__fadeInLeft">
        <img src={image} className=" img-fluid" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center text-s fs-2">{name}</h5>
        </div>
        <hr />
        <Link to={`pj/${id}`}>
          <button className="btn btn-success">Ver</button>
        </Link>
      </div>
    </>
  )
}
