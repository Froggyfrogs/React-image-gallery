import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <Card style={{ width: "18rem", padding: "1rem", margin: "1rem" }}>
      <Card.Img
        style={{ height: "15rem" }}
        variant="top"
        src={image.webformatURL}
      />
      <Card.Body>
        <Card.Title style={{ color: "pink", fontFamily: "fantasy" }}>
          Photo by: {image.user}
        </Card.Title>

        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong> {image.likes}
          </li>
        </ul>
        <div className="container">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-dark text-dark m-1">
              #{tag}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
