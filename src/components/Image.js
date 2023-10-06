import { product } from "../product"
import Card from "react-bootstrap/Card"

const Image = () => (
  <Card.Img variant="top" src={product.image} alt="The Iphone 15 pro" width="400" height="200" />
)

export default Image