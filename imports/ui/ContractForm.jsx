import React from 'react';
import { useState } from 'react';
import { ContractCollection } from '../api/ContractCollection';

export const ContractForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const submitForm = () => {
        ContractCollection.insert({name,email,imageUrl});
        console.log(name,email,imageUrl);
        setName('');
        setEmail('');
        setImageUrl('');
    }

    return (
       <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' value={name} id='text' onChange={(e)=>(setName(e.target.value))}/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' value={email}  id='email' onChange={(e)=>(setEmail(e.target.value))}/>

        </div>
        <div>
            <label htmlFor='imageUrl'>Image Url</label>
            <input type='text' value={imageUrl}  id='imageUrl' onChange={(e)=>(setImageUrl(e.target.value))}/>

        </div>
        <button type='button' onClick={submitForm}>Submit</button>
       </form> 
    );

}