import { useEffect, useState } from "react";

function useCurrencyInto(currency)
{
    const [data,setData]=useState({})
    useEffect(()=>
    {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_AHb9sga40S1U04lWW86RKBWp62XGOtBaf4xzR6KK&base_currency=${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.data))
       
    },[currency])
     console.log(data);
    return data;
}
export default useCurrencyInto;