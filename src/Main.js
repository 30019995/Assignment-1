import React, { Component } from "react";
import Content from "./content";
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component
{
    render()
    {
        return(
            <div >
                <Header/>
                <Content />
                <Footer/>
                
            </div>
        );
    }
}

export default Main;