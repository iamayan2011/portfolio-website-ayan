import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, category, description, url, imgUrl }) => {


  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={url} rel="noreferrer" target="_blank">
        <img src={imgUrl} alt="" style={{height:"280px",objectFit: "cover"}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span id="category">{category}</span><br></br>
          <span id="description">{description}</span>
          
        </div>
        </a>
      </div>
    </Col>
  )
}