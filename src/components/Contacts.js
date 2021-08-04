import React, { useState } from "react";
import { db } from '../firebase';
// import "../app.css";

const Contacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    
    
    const handleSubmit = (e) => {
        // alert(name);
        e.preventDefault();
        db.collection('contacts')
        .add({
        name : name,
        email: email,
        message: message,
        })
        .then(() => {
            alert("message sent");
        })
        .catch((error) => {
            alert(error.message);
        });
        if(db == true){
            alert("successfully sent")
        }else{
            alert(name + '  ' + email + '  ' + message);
        }
        setName("");
        setEmail("");
        setMessage("");
    };
    return(
        <>
        <div className="jumbotron jumbotron-fulid container">
            <div className="container text-center">
                <h1>
                    Contact Register
                </h1>
            </div>
        </div>
        <div className=" container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input className="form-control" placeholder="Full Name"  value={name}
                onChange={(e) => setName(e.target.value)}  />
            </div>
            <div className="form-group input-group">
                <div className="inpit-group-prepend">
                    <div className="input-group-text">
                    <span class=""><i className="fas fa-mobile-alt"></i></span>
                    </div>
                </div>
                <input className="form-control" placeholder="Enter email" value={email}
                 onChange={(e) => setEmail(e.target.value)}  />
            </div>
            <div class="form-group">
                <label for="comment">Address:</label>
                    <textarea class="form-control" rows="3" placeholder="Address"  value={message}
                onChange={(e) => setMessage(e.target.value)} >
                    </textarea>
                </div>
            <div className="form-group">
                <input type="submit"   value="Save" className="btn btn-primary btn-block" />
            </div>
        </form>
        
        </div>
        </>

    );
}
export default Contacts;