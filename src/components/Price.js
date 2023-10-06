import { product } from "../product"
import Card from "react-bootstrap/Card"

const Price = () => <Card.Text style={{fontSize: '1.5rem', fontWeight: 700}}>{product.price}</Card.Text>

export default Price