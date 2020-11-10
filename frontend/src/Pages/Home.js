import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.paper {
    box-sizing:border-box;
    width:350px;
    height:410px;
    background: #fff;
    padding: 30px 30px 80px 30px;
    position: relative;
  }
  
  .paper {
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.30);
  }
  
  .paper,
  .paper:before,
  .paper:after {
    border: 1px solid #bbb;
  }
  
  .paper:before,
  .paper:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
  }
  
  .paper:before {
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.35);
    background-color: #eee;
    right: 10px;
    top: 0;
    transform: rotate(-3deg);
    z-index: -1;
  }
  
  .paper:after {
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.25);
    background-color: #ddd;
    top: 10px;
    right: -15px;
    transform: rotate(2deg);
    z-index: -2;
  }
  
  .pic {
    background-image:url(https://www.clipartmax.com/png/middle/44-443968_smiley-png-thumbs-up-emoji-png.png);
    width:auto;
    height:100%;
    background-repeat: no-repeat;
    background-size: contain, cover;
  }
  
  .pic:after{
     content:'My Bug Tracker';
     white-space:pre;
     text-transform:uppercase;
     width:100px;
     position:absolute;
     top:340px;
     right:170px;
     font-size:24px;
     text-align:center;
     font-family: 'Pangolin', 'Andale Mono', 'Courier New', Courier, monospace;
  }
`;

function Home() {
    
    return(
         <center>
            <Styles>
                <div className="paper">
                    <div className="pic">
                    </div>
                </div>
            </Styles>
         </center>
    )
}

export default Home;