import img from "../../Assets/Images/index"
import './PreviewCard.css'

export const PreviewCard = ()=>{

    return(    
        <div className="uknownCard">
            <img className="logo" src={img.logoDesktop} alt= "logo" />
        </div>
    )

}