import React from "react";


export default function Info() {
    return(
        <div className="info">
            <div><img src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img></div>
            <div className="name">
                <h2>Alexey Lozin</h2>
                <h3>Web Developer</h3>
                <p>www.alexeylozin.com</p>
                <button><img className='btn-img' src='https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-512.png'></img>Email</button>
            </div>
                
            
        </div>
    );
}