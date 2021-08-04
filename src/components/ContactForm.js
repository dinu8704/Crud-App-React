import React, {useState, useEffect} from "react";

const ContactForm = (props) => {
    const initialFieldValues ={
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
    var [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        var  { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return(
        <>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName}
                onChange={handleInputChange}  />
            </div>
            <div className="form-row">
            <div className="form-group input-group col-md-6">
                <div className="inpit-group-prepend">
                    <div className="input-group-text">
                    <span class=""><i className="fas fa-mobile-alt"></i></span>
                    </div>
                </div>
                <input className="form-control" placeholder="Enter Mobile" name="mobile" value={values.mobile}
                 onChange={handleInputChange}  />
            </div>
            <div className="form-group input-group col-md-6">
                <div className="inpit-group-prepend">
                    <div className="input-group-text">
                    <span class=""><i className="fas fa-envelope"></i></span> 
                    </div>
                </div>
                <input className="form-control" placeholder="Enter Email" name="email" value={values.email}
                onChange={handleInputChange}  />
            </div>
            </div>
            <div class="form-group">
                <label for="comment">Address:</label>
                    <textarea class="form-control" rows="3" placeholder="Address" name="address"  value={values.address}  
                         onChange={handleInputChange} >
                    </textarea>
                </div>
            <div className="form-group">
                <input type="submit" value="Save" className="btn btn-primary btn-block" />
            </div>
        </form>
        
        </>
    );
}

export default ContactForm;