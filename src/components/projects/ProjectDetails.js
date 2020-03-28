import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti alias cumque sunt nesciunt iste laborum totam ipsam porro, debitis, omnis dignissimos quaerat est? Veniam placeat rerum impedit nisi ullam sit?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Michael Cortez</div>
          <div>28 March, 1pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
