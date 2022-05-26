import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'



export default function Navbar(props) {
  // const theValue = useSelector((state)=>{ return state.changeNum});
 
    return (
<>
<nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    {/* <a className="navbar-brand" href ="#">{props.sitname}</a> */}
    <Link className="navbar-brand" to ="/">{props.sitname}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link " aria-current="page" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link"  href="#">{props.about}</a> */}
          <Link className="nav-link"  to="/about">{props.about}</Link>
        </li>
        
       
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="d-flex .flex-sm-row ">
      <div className="bg-danger rounded mx-2 my-2 "style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>props.pallet('danger')}></div>
      {/* <div className=" rounded mx-2"style={{height:'30px', width:'30px', cursor:'pointer',backgroundColor:'#70aeca'}} onClick={()=>props.pallet('#70aeca')}></div> */}
      <div className="bg-info rounded mx-2 my-2 .flex-sm-row"style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>props.pallet('info')}></div>
      <div className="bg-warning rounded mx-2 my-2"style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>props.pallet('warning')}></div>
      <div className="bg-success rounded mx-2 my-2"style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>props.pallet('success')}></div>
      </div>
      <div className="form-check form-switch transition" >
        <input className="form-check-input" style={{transition: '.4s'}} onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark mode':'Enable Light mode'}</label>
        {/* <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.chtext}</label> */}
      </div>
    </div>
  </div>
  {/* <div className="container">
  <input type="text" value = {theValue} className="btn btn-info"/>
  </div> */}
</nav>

 </>

    )
}

Navbar.propTypes ={
    sitname: PropTypes.string,
    about: PropTypes.string,
}

Navbar.defaultProps ={
    sitname: 'enter sitename',
    about: 'enter about',

}