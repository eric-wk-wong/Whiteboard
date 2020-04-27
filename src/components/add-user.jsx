import React,{ useState } from 'react'
import app from './base.js'


const AddUserEntryForm = () => {
    const [userName, setUserName] =useState('')
    const [dateOfbirth, setDateOfBirth] =useState('')
    const [address,setAddress] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        app
        .firestore()
        .collection('userinfo')
        .add({
            userName,
            dateOfbirth,
            address
        })
        .then(() =>{
            setUserName('')
            setDateOfBirth('')
            setAddress('')
        })
    }

    return(
        <form onSubmit={onSubmit} className="logform">
            <h3>Add / Edit User's Information</h3>
            <div>
                <label><strong>User Name</strong></label>
                <input placeholder="Name here..." className="expand loginput layoutbg" type="text" value={userName} onChange={e=>setUserName(e.currentTarget.value)}/>
            </div>
            <br/>
            <div>
                <label><strong>Date of Birth</strong></label>
                <input placeholder="MM/DD/YYYY" className="expand loginput layoutbg" type="text" value={dateOfbirth} onChange={e=>setDateOfBirth(e.currentTarget.value)}/>   
            </div>
            <br/>
            <div>
                <label><strong>Address:</strong></label>
                <input placeholder="Add Address Here" className="expand loginput layoutbg" type="text" value={address} onChange={e=>setAddress(e.currentTarget.value)}/>   
            </div>
            <br/>
            <button variant="primary" className="expand"><strong>Update</strong></button>

        </form>
    )
}

export default AddUserEntryForm;