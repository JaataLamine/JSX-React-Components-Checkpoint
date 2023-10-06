import { product } from "../product"
import Card from "react-bootstrap/Card"

const Name = () => <Card.Title style={{fontSize: '1.8rem', fontWeight: 700}}>{product.name}</Card.Title>

export default Name