import React, { useEffect } from 'react';
import Card from  "./Card";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDevs, selectAllDevs, selectError, selectStatus } from '../redux/devsSlice';
import {fetchCurrencies} from "../redux/currencySlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const devs = useSelector(selectAllDevs);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  //Remove duplicates in devs array
  const ids = devs.map(o => o._id)
  const filteredDevs = devs.filter(({_id}, index) => !ids.includes(_id, index + 1))

  useEffect(()=>{
    if (status === "pending"){
      dispatch(fetchDevs())
    }
    dispatch(fetchCurrencies())
  },[status, dispatch])

  return (
    <section className='home'>
      <h1>Hire Top Developers</h1>
     {
       status === "pending" ? <h2>Loading..</h2>
       : 
       status === "succeeded" ? 
       <div className="cards">
         {
           filteredDevs.map((dev) => (
            <Card dev={dev} key={dev._id} />
           ))
         }
       </div>
       :
       status === "failed" && <h1>{error}</h1>
     }
    </section>
  )
}

export default Homepage