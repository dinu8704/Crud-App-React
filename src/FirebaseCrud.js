import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import swal from "sweetalert";


const FirebaseCrud = () => {

    const [aFirstName, setAFirstName] = useState("");
    const [aLastName, setALastName] = useState("");
    const [userData, setUserData] = useState([]);
    const [uFirstName, setuFirstName] = useState("");
    const [uLastName, setuLastName] = useState("");
    const [userId, setUserId] = useState("");

    // for fetching the data 
    useEffect(() => {
        const firestore = firebase.database().ref("/UserInfo");
        firestore.on("value", (response) => {
            const data = response.val();
            let userInfo = [];
            for(let id in data){
                userInfo.push({
                    id: id,
                    FirstName: data[id].FirstName,
                    LastName: data[id].LastName,
                });
            }
            setUserData(userInfo);
        });
    }, []);


    // sending data to firebase 
    const handleAddUser = (e) => {
        e.preventDefault();

        const firestore = firebase.database().ref("/UserInfo");
        console.log(firestore);
        let data = {
            FirstName: aFirstName,
            LastName: aLastName,
        };
        if(data){
            // alert("success " + aFirstName + " " + aLastName );
            swal("Sumited!", "Successfully submited data!", "success");
        }else{
            swal("Oops!", "Something went wrong!", "error");
        }
        firestore.push(data);
        setAFirstName("");
        setALastName("");
    };

    // update the value from firebase 
    const handleUpdateUser = (e) => {
        e.preventDefault();
        if(uFirstName == '' && uLastName == ''){
            alert("You not select any value for updating.!");
        }else{
            const firestore = firebase.database().ref("/UserInfo").child(userId);
            firestore.update({
                FirstName: uFirstName,
                LastName: uLastName,
            });
            setuFirstName("");
            setuLastName("");
        }
    };

    // When data fetching in list update button fire and show values in edit form 
    const handleUpdateClick = (data) =>{
            setuFirstName(data.FirstName);
            setuLastName(data.LastName);
            setUserId(data.id);
    };

    // delete the value from firebase 
    const handleDelete = (id) =>{
        const firestore = firebase.database().ref("/UserInfo").child(id);
        firestore.remove();
        if(firestore){
            alert("Data delete successfully...");
        }
    };

    return ( 
    <>
    <div className="jumbotron">
        <div className="container text-center">
            <div><h1>ReactJS Crud Operation With Firebase</h1></div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-lg-6">
                <div className="text-center"><h3>Add User </h3></div>
                <form autoComplete="off" onSubmit={handleAddUser}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">#</span>
                        </div>
                        <input className="form-control" placeholder="Username"  value={aFirstName}
                         onChange={(e) => setAFirstName(e.target.value)} required />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input className="form-control" placeholder="email"  value={aLastName} 
                        onChange={(e) => setALastName(e.target.value)} required />
                    </div> 
                    <div className="mx-4">
                        <button className="btn btn-primary btn-block" type="submit" >Save</button>
                    </div>
                </form>
            </div>
            <div className="col-md-6 col-lg-6">
            <div className="text-center"><h3>Edit User </h3></div>
            <form autoComplete="off" onSubmit={handleUpdateUser}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">#</span>
                        </div>
                        <input className="form-control" placeholder="Username"  value={uFirstName}
                         onChange={(e) => setuFirstName(e.target.value)} required/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input className="form-control" placeholder="email"  value={uLastName} 
                        onChange={(e) => setuLastName(e.target.value)} required/>
                    </div> 
                    <div className="mx-4">
                        <button className="btn btn-primary btn-block" type="submit" >Update</button>
                    </div>
                </form>
            </div>
        </div>
        <br/>
        {userData.length == 0  ? (
            <h3 className="text-center">Ooops! There is no data in database. </h3>
        ) : (
            <div >
                <table className="table table-dark table-striped table-bordered">
                    <thead>
                    <tr>
                        <th> FirstName</th>
                        <th>LastName</th>
                        <th>Operation</th>
                    </tr>
                    </thead> 
                    <tbody>
                        {
                            userData.map((data,index) => {
                                return (
                                <>
                                <tr>
                                    <td>{data.FirstName}</td>
                                    <td>{data.LastName}</td>
                                    <td className="text-center">
                                        <button className="btn btn-primary mr-2" onClick={()=>{handleUpdateClick(data)}} >Update</button>
                                        <button className="btn btn-danger ml-2" onClick={()=>{handleDelete(data.id)}}>Delete</button>
                                    </td>
                                </tr>
                                </>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )}
    </div>

    </>
    )
};

export default FirebaseCrud;