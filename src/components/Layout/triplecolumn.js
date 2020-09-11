import React from "react";
import "./triplecolumn.css";
import "../Layout/SiteWrapper.css";

var parentDiv = document.getElementsByClassName('tripleColumn').parentNode;

// function tripleColumn(props) {
//     return(
//         <div class="tripleColumn" id="triplecolumn">
//             <div class='topLeft'>
//                 <img src={props.imgtopleft} alt={props.imgtopleftalt} height={props.imgtopleftheight}></img>
//                 <h2>{props.toplefttitle}</h2>
//                 <h3>{props.topleft}</h3>  
//             </div>
//             <div class='topMid'>
//                 <img src={props.imgtopmid} alt={props.imgtopmidalt} height={props.imgtopmidheight}></img>
//                 <h2>{props.topmidtitle}</h2>
//                 <h3>{props.topmid}</h3>
//             </div>
//             <div class='topRight'>
//                 <img src={props.imgtopright} alt={props.imgtoprightalt} height={props.imgtoprightheight}></img>
//                 <h2>{props.toprighttitle}</h2>
//                 <h1>{parentDiv}</h1>
//                 <h3>{props.topright}</h3>  
//             </div>
            
//         </div>
//     );
    
// }
class TripleColumn extends React.Component {
    render() {
        return(
            <div class="tripleColumn" id="triplecolumn">
                <div class='topLeft'>
                    <img src={this.props.imgtopleft} alt={this.props.imgtopleftalt} height={this.props.imgtopleftheight}></img>
                    <h2>{this.props.toplefttitle}</h2>
                    <h3>{this.props.topleft}</h3>  
                </div>
                <div class='topMid'>
                    <img src={this.props.imgtopmid} alt={this.props.imgtopmidalt} height={this.props.imgtopmidheight}></img>
                    <h2>{this.props.topmidtitle}</h2>
                    <h3>{this.props.topmid}</h3>
                </div>
                <div class='topRight'>
                    <img src={this.props.imgtopright} alt={this.props.imgtoprightalt} height={this.props.imgtoprightheight}></img>
                    <h2>{this.props.toprighttitle}</h2>
                    <h1>{parentDiv}</h1>
                    <h3>{this.props.topright}</h3>  
                </div>
                
            </div>
        );
    }
}
export default TripleColumn;
