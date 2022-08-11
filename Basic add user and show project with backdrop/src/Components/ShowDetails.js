import Card from "../UI/Card/Card.js";
import DataItem from "./DataItem.js";

const ShowDetails =(props)=>{

    return (
        <Card>
            {props.dataFA.map((data)=><DataItem data={data} key={data.id}/>)}
        </Card>
    );
}

export default ShowDetails;