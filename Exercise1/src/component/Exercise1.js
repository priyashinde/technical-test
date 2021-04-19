import React,{useEffect,useState} from 'react';
import moment from 'moment';
import {getTimeZoneCountry,getTime} from '../services/timezone';

function Exercise1() {
    const [time, setTimes] = useState('');
    const [zoneList,setZoneList] = useState([]);
    const [zone,setZone] = useState('');
    const [error,setError] = useState('');
    let interval;

    
    useEffect(()=> {
        //Get zone list only once
        const getTimeZoneList=async()=>{
            if(zoneList.length==0) {
                let res=await getTimeZoneCountry();               
                if(res.status) {
                    setZoneList([...res.data]);
                } else {
                    setError(res.message);
                }
            } 
        }
        getTimeZoneList();
      }, []);

      useEffect(()=> {
        const setTimeZoneFun=async()=>{ 
            //Set interval when zone change
                interval = setInterval(()=>{ 
                    //Set time for every 5 seconds                   
                    setTimes((time)=>moment(time,'DD.MM.YYYY HH:mm:ss').add(5, 'seconds').format('DD.MM.YYYY HH:mm:ss'))
                }, 5000); 
            //Unmount and clean interval                
            return function cleanup() {
                clearInterval(interval);            
            }
        }
        setTimeZoneFun();
      }, [zone]);
    
    //When user select zone from the list
    const changeZone=async(e)=>{
        if(interval){
            clearInterval(interval);
        }
        let val=e.currentTarget.value;
        setZone(val);
        //Get time details from selected zone       
        const timeDetails=await getTime(val);        
        if(timeDetails.status) {
            let dateTime=moment(timeDetails.data.formatted).format('DD.MM.YYYY HH:mm:ss');
            await setTimes((time)=>dateTime); 
        } else {
            //Show error
            setError(timeDetails.message);
        }
    }

    return (
        <div className="App">
            <div>{error}</div>
            Select Time Zone: <select id="timezone" name="timezone" value={zone} onChange={changeZone}>        
                <option value="">Select Timezone</option>
            {
                zoneList.map((item,index)=>{               
                    return <option value={item.zoneName} key={index}>{item.zoneName}</option>
                })
            }
            </select>
            <br/>
            Time: {time}
        </div>
    );
}

export default Exercise1;