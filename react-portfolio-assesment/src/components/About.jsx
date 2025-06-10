function About(){
    return(
        <>
        <div className="about mb-2  " id="about">
            <div className="card mb-3 " style={{width:"560px" , margin:"auto"}}>
  <div className="row g-0">
    <div className="col-md-4 mt-3">
      <img src="./Assets/pf.avif" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-primary">Hitesh Patil</h5>
        <p className="card-text"><b>Email:  </b><a className="link-dark  link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="mailto:hiteshpatil1411@gmail.com">hiteshpatil1411@gmail.com</a></p>
        <p className="card-text"><b>Location:  </b>Pune</p>
        <p className="card-text"><b>Occupation:  </b>Web Devpolment </p>
        <p className="card-text"><b>About me:  </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, mollitia?</p>
      </div>
    </div>
  </div>
</div>
            


        </div>
        </>
    )



}
export default About;