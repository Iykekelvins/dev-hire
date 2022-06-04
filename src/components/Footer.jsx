import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCurrency } from '../redux/currencySlice';
import { ReactComponent as DropIcon } from '../svgs/carret.svg';
import nigeria from "../assets/nigeria.png";

const Footer = () => {
    const year = new Date().getFullYear();
    const  currencies = useSelector(selectAllCurrency);

    //Remove duplicates in currency array
    const currencyNames = currencies.map(o => o.name)
    const filteredCurrencies = currencies.filter(({name}, index) => !currencyNames.includes(name, index + 1))

    const [selected, setSelected] = useState({
        img: nigeria,
        name:"Naira"
    })

    const [showOptions, setShowOptions] = useState(false);

    return (
    <footer className='footer'>
        <h4>©{year}DevHire</h4>
         <div>
            <div className="dropdown"
            onClick={()=> setShowOptions(!showOptions)}
            >
            <div className="dropdown--info">
                <img src={selected.img} alt="flag" />
                <h4>{selected.name}</h4>
            </div>
            <DropIcon />
            </div>
            {
                showOptions && 
                <div className="options">
                {
                    filteredCurrencies.map((currency) => (
                        <article
                        key={currency.name}
                        onClick={(e)=> {
                            setSelected({
                                img: currency.flag_url,
                                name: currency.name
                            })
                            setShowOptions(false)
                        }}
                        >
                            <img src={currency.flag_url} alt="flag" />
                            <h4>{currency.name}</h4>
                        </article>
                    ))
                }
                </div>
            }
        </div>
    </footer>
  )
}

export default Footer