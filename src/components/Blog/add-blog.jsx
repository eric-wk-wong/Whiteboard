import React,{ useState } from 'react'
import app from '../firebase/base.js'

const AddTimeEntryForm = () => {
    const [title, setTitle] =useState('')
    const [time, setTime] =useState('')
    const [note,setNote] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        app
        .firestore()
        .collection('tasks')
        .add({
            title,
            time,
            note
        })
        .then(() =>{
            setTitle('')
            setTime('')
            setNote('')
        })
    }

    return(
        <form onSubmit={onSubmit} className="logform">
            <h3>Baruch | Blog</h3>
            <div>
                <label><strong>Title:</strong></label>
                <input placeholder="Title here..." className="expand blogtextbox layoutbg" type="text" value={title} onChange={e=>setTitle(e.currentTarget.value)}/>
            </div>
            <br/>
            <div>
                <label><strong>Name:</strong></label>
                <input placeholder="First, Last Name" className="expand blogtextbox layoutbg" type="text" value={time} onChange={e=>setTime(e.currentTarget.value)}/>   
            </div>
            <br/>
            <div>
                <label for ><strong>Blog:</strong></label>
                <br/>
                <textarea  placeholder="Blog..." className="expand bloginput layoutbg" type="text" value={note} onChange={e=>setNote(e.currentTarget.value)}/>   
            </div>
            <br/>
            <button><strong>Upload</strong></button>

        </form>
    )
}

export default AddTimeEntryForm;