import React,{useState, useEffect} from 'react';
import app from '../firebase/base.js'
import Class1 from './popwindow';


const SORT_OPTIONS = {
    'TITLE_ASC': {column: 'title', direction:'asc'},
    'TITLE_DESC': {column: 'title', direction:'desc'},
}

function useTimes(sortBy= 'TITLE_ASC') {
    const [times,setTimes] =useState([])

    useEffect(()=>{
        const unsubscribe = app
        .firestore()
        .collection('tasks')
        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
        .onSnapshot((snapshot) =>{
            const newTimes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTimes(newTimes)
        })
        return() =>unsubscribe()
    }, [sortBy])

    return times
}

const TimesList = () =>{
    const [sortBy ,setSortBy] = useState('TITLE_ASC')
    const times = useTimes(sortBy)
    

    return(
        <div>
            <div>
            <div className="blog">
            <h1>Baruch | Blog</h1>
            <div>
            
                <label>Sort:</label>{' '}
                 <select className="expand" value={sortBy} onChange={e => setSortBy(e.currentTarget.value)} >
                     <option value="TITLE_ASC">A-Z</option>
                     <option value="TITLE_DESC">Z-A</option>
                 </select>
                 <Class1/>
                 </div>
            </div>


            <hr/>
            </div>
 

            <ol>
                {times.map((time)=>
                <li className="expand" key={time.id} >
                <div className="time-entry">
                    <h4><strong>{time.title}</strong></h4>
                    <div className="time"><strong>By: {time.time}</strong></div>
                </div>
                <div className="blogbody layoutbg">
                <p>{time.note}</p>
                </div>
                <hr/>
            </li>
                )}
            </ol>

        </div>
    )
}
export default TimesList;