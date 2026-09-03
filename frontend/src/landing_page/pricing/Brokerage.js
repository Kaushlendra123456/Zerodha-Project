import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul className="text-muted" style={{textAlign:"left",lineHeight:"2.5", fontSize:"12px"}}>
                        <li>Call  Trade and RMS auto-squareoff</li>
                        <li>Digital contract notes willbe sent via e-mail.</li>
                        <li>For NRI account(non-PIS),0.5% executed order for equity.</li>
                         <li>For NRI account(PIS),0.5% executed order for equity.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                     <a href=''style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
                
                
            

                
               
            
        </div>
     );
}

export default Brokerage;