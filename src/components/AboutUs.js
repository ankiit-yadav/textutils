import React,{useState} from 'react';


function AboutUs(){

    const [Btn,SetNewBtn] = useState("Enable Dark Mode");
    const [Style,SetNewStyle] = useState({
        color: "White",
        backgroundColor: "Black"
    });

    const toggle=()=>{
        if(Style.color === "White"){
            SetNewStyle({
            color: "Black",
            backgroundColor : "White"
        })
        SetNewBtn("Enable Dark Mode");
    }

        else{
         SetNewStyle({
            color: "White",
            backgroundColor : "Black",
        })
       SetNewBtn("Enable Light Mode");
    }


    } 
    return(
        <>
         <h1 className='my-4' >About Us</h1>
        <div className="container-fluid" style={Style}> 
           
            <div className="accordion accordion-flush" id="accordionFlushExample" style={Style}>
                <div className="accordion-item" style={Style}>
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" style={Style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item" style={Style}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" style={Style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" style={Style}>
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" style={Style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div>    
        <div className="container my-3 mx-3">
                <button className="btn btn-outline-success" type='button' onClick={toggle}>{Btn}</button>
            </div>
        </>
    )
}

export default AboutUs;
