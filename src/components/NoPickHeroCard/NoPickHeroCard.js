import img from "../../Assets/Images/index"
import './NoPickHeroCard.css'

export const NoPickHeroCard = ()=>{

    return(    
        <div className="uknownCard">
            <img className="logo" src={img.logoDesktop} alt= "logo" />
        </div>
    )

}