const projects=["FitBot","Profilecard","Event Card"]

function Projects(){

    return(

        <>

        <div className="project mb-3 " id="project">
            <h2 className="text-center text-primary">Projects</h2>
            <div className="card-group " style={{width:"90%",margin:"auto"}}>
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title">{projects[0]}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#p1">
  Know More
</button>    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{projects[1]}</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#p2">
  Know More
</button>    </div>
  </div>
  <div className="card">

    <div className="card-body">
      <h5 className="card-title">{projects[2]}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#p3">
  Know More
</button>
    </div>
  </div>
</div>
{/* maodel p1 */}
<div class="modal fade" id="p1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{projects[0]}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div
  className="card "
  style={{ width: '18rem', margin:"25px auto"  }}
  data-bs-theme="dark"
>

  <img src="./Assets/eventImg.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-info"> {projects[0]}</h5>
    <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam eligendi corrupti quos omnis necessitatibus aut explicabo fugit expedita molestias laboriosam corporis asperiores distinctio quaerat accusamus, officia porro atque enim.</p>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

{/* model p2 */}
<div class="modal fade" id="p2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{projects[1]}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div
  className="card "
  style={{ width: '18rem', margin:"25px auto"  }}
  data-bs-theme="dark"
>

  <img src="./Assets/eventImg.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-info"> {projects[1]}</h5>
    <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam eligendi corrupti quos omnis necessitatibus aut explicabo fugit expedita molestias laboriosam corporis asperiores distinctio quaerat accusamus, officia porro atque enim.</p>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* model p3 */}
<div class="modal fade" id="p3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{projects[2]}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div
  className="card "
  style={{ width: '18rem', margin:"25px auto"  }}
  data-bs-theme="dark"
>

  <img src="./Assets/eventImg.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-info"> {projects[2]}</h5>
    <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam eligendi corrupti quos omnis necessitatibus aut explicabo fugit expedita molestias laboriosam corporis asperiores distinctio quaerat accusamus, officia porro atque enim.</p>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        </div>
        
        </>

    )
}

export default Projects;