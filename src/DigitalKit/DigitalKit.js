import { digitaldata } from "./digitaldata"
import { DigitalItem } from "./DigitalItem"
import './Digital.css';


export const DigitalKit = () =>
{
    return(
        <div className="digital-kit-page">
            <div className="header">
                <h1>Seize the opportunity and take advantage of our exclusive offers.</h1>
            </div>
            <div className="digital-kit"> 
            {digitaldata.map((item, index) =>
            <DigitalItem key={index} title={item.title} content={item.content}  />)}
        </div>
        </div>
    )
}