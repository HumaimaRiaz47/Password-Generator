import React, { useState } from 'react'
import './Password.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UC, LC, SC, NC } from './Data/PassChar'

export const Password = () => {
    let [uppercase, setUppercase] = useState(false)
    let [lowercase, setLowercase] = useState(false)
    let [number, setNumber] = useState(false)
    let [charater, setCharacter] = useState(false)
    let [passwordLen, setPasswordlen] = useState(10)
    let [fpass, setPass] = useState('')


    let createPassword = () => {
        let finalPass = ''
        let charSet = ''
        if (uppercase || lowercase || number || charater) {

            if (uppercase) charSet += UC
            if (lowercase) charSet += LC
            if (number) charSet += NC
            if (charater) charSet += SC
            for (let i = 0; i < passwordLen; i++) {
                finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))


            }
            setPass(finalPass)


        }
        else {
            toast("Please select atleast one checkbox")
        }

    }

    let copyPass = () => {
        navigator.clipboard.writeText(fpass)
        toast('text-copied')
    }

    return (
        <div className='passwordBox'>
            <ToastContainer />

            <h2>Password Generator</h2>

            <div className='passwordBoxin'>
                <input type='text' readOnly value={fpass} /> <button onClick={copyPass}>Copy</button>
            </div>

            <div className='passLength'>
                <label>Password length</label>
                <input type='number' max={20} min={10} value={passwordLen} onChange={(event) => setPasswordlen(event.target.value)} />
            </div>

            <div className='passLength'>
                <label>Include uppercase letter</label>
                <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
            </div>

            <div className='passLength'>
                <label>Include lowercase letter</label>
                <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
            </div>

            <div className='passLength'>
                <label>Include number letter</label>
                <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />
            </div>

            <div className='passLength'>
                <label>Include characters letter</label>
                <input type='checkbox' checked={charater} onChange={() => setCharacter(!charater)} />
            </div>
            <button className='btn' onClick={createPassword}>Generate Password</button>

        </div>
    )
}
