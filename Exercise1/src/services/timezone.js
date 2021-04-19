import {baseURL} from "./api";
const key='XWSLLPX5RMIZ';
const format='json';
const zone='Europe';

//Get list of time zone
export const getTimeZoneCountry=async function() {
    try{ 
          
        let res=await fetch(`${baseURL}/list-time-zone?key=${key}&format=${format}&zone=${zone}`);
        res = await res.json();        
        if(res && res.status==='OK') {
            return ({status:true,data:res.zones});
        } else {
            return ({status:false,message:res.message});
        }       
    } catch(err) {
        return ({status:false,message:err.message});
    }
}

//As per zone name get time details
export const getTime=async function(zoneName) {
    try{           
        let res=await fetch(`${baseURL}/get-time-zone?key=${key}&format=${format}&by=zone&zone=${zoneName}`);       
        res = await res.json();       
        if(res && res.status==='OK') {
            return ({status:true,data:res});
        } else {
            return ({status:false,message:res.message});
        }       
    } catch(err) {
        return ({status:false,message:err.message});
    }
}