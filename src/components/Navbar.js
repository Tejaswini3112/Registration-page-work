import React from 'react'

function Navbar() {
  return (
    <div>
     {/* <div classNameName="max">
    <div classNameName="row row-cols-2">
    <div classNameName="col1">Column <br />hrhcsknkcj </div>
    <div classNameName="col2">Column</div>
    <div classNameName="col3">Column</div>
    <div classNameName="col4">Column</div>
  </div>
</div> */}
<div className="max">
  <div className="row">
    <div className="col-6 ">
      Quiz description 
      <br />
      Duration: 3 hrs <br />
      Level:Easy <br />
      <button type="button" className="btn btn-primary">Play</button>
    </div>

      <div className="col-6 ">
      <div className="row d-flex justify-content-center mt-100">
        <div className="col-md-6">
          <div className="progress blue"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
          
            <div className="progress-value">90%</div>
          </div>
        {/* <div className="progress yellow"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
            <div className="progress-value">37.5%</div>
        </div> */}
      </div>
      </div>
    </div>

    {/* <!-- Force next columns to break to new line --> */}
    {/* <div className="w-100"></div>

    <div className="col-6 ">
      Quiz description <br /> 
      Duration: 3 hrs <br />
      Level:Easy <br />
      <button type="button" className="btn btn-primary">Play</button></div>
      <div className="col-6 ">
      Quiz description <br /> 
      Duration: 3 hrs <br />
      Level:Easy <br />
      <button type="button" className="btn btn-primary">Play</button></div> */}

  </div>
</div>
    </div>
  )
}

export default Navbar
