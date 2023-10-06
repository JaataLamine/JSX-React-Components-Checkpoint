import { product } from "../product"
import Card from "react-bootstrap/Card"

const Description = () => <Card.Text style={{fontSize: '1.1rem'}}>{product.description}</Card.Text>

export default Description