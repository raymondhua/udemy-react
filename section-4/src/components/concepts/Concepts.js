import Card from "../UI/Card";
import ConceptItem from "./ConceptItem";

function Expenses(props) {
    return (<Card>
      <ConceptItem
        title={props.items[0].title}
        image={props.items[0].image}
        description={props.items[0].description}
      ></ConceptItem>
    <ConceptItem
        title={props.items[1].title}
        image={props.items[1].image}
        description={props.items[1].description}
      ></ConceptItem>
    <ConceptItem
        title={props.items[2].title}
        image={props.items[2].image}
        description={props.items[2].description}
      ></ConceptItem>
    </Card>)
}

export default Expenses;