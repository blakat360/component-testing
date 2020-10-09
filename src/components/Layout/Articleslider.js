import "../layout.css"
import React from "react";
import "./Articleslider.css";
import "../Layout/SiteWrapper.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselItem from "./CarouselItem";
import logo from "../../images/mesmerixHorixzontalSF.png";
// The following additional props are needed to use this: doubleColumnHeight1, doubleColumnRow1 (eg. --row3)
// The rows that can be defined are --row1, --row2, --row3, --row4, --row5, these all have sub dimensions in the style: --row1-h1

function ArticleSlider(props) {
    let heightVar1 = props.articleSliderHeight;
    let articleSliderRowNo = props.articleSliderRow;
    document.documentElement.style.setProperty(String(articleSliderRowNo), heightVar1);
    document.documentElement.style.setProperty("--articleSliderH1", heightVar1);
    return(
        <div class="articleSlider">
           
            <Carousel class='sliderBlock'>
                <Carousel.Item>
                    <CarouselItem itemHeading={props.slideonehead} itemBody={props.slideonebody} buttonType={props.buttontype} itemImage={logo} 
                    carouselItemClass={props.carouselItemClass}
                    caroImageClass={props.caroImageClass}
                    caroTextClass={props.caroTextClass}
                    headerTextType={props.headerTextType}
                    bodyTextType={props.bodyTextType}
                     />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselItem itemHeading={props.slidetwohead} itemBody={props.slidetwobody} buttonType={props.buttontype} itemImage={logo}
                    carouselItemClass={props.carouselItemClass}
                    caroImageClass={props.caroImageClass}
                    caroTextClass={props.caroTextClass}
                    headerTextType={props.headerTextType}
                    bodyTextType={props.bodyTextType}
                    />
                <Carousel.Caption>
                        
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselItem itemHeading={props.slidethreehead} itemBody={props.slidethreebody} buttonType={props.buttontype} itemImage={logo}
                    carouselItemClass={props.carouselItemClass}
                    caroImageClass={props.caroImageClass}
                    caroTextClass={props.caroTextClass}
                    headerTextType={props.headerTextType}
                    bodyTextType={props.bodyTextType}
                    />
                <Carousel.Caption>
                       
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  

        </div>
    );
    
}

export default ArticleSlider;
