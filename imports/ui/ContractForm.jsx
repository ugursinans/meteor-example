import React from 'react';
import { useState } from 'react';
import {Meteor} from 'meteor/meteor';
import { Button,Grid,TextField } from '@mui/material';
import { Container } from '@mui/system';
export const ContractForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const submitForm = () => {
        //ContractCollection.insert({name,email,imageUrl});
        Meteor.call('insertContract',{name,email,imageUrl},(response)=>{
            if(response){ 
                alert(response.error);
            }
        });
        setName('');
        setEmail('');
        setImageUrl('');
    }

    return (
       <form>
        <Grid container spacing ={2} direction="column">
            <Grid item>
                <TextField fullWidth value={name} id='name' onChange={(e)=>(setName(e.target.value))} label="Name" variant="filled" />
            </Grid>
            <Grid item>
                <TextField fullWidth value={email} id='email' onChange={(e)=>(setEmail(e.target.value))} label="Email" variant="filled" />
            </Grid>
            <Grid item>
                <TextField fullWidth value={imageUrl} id='imageUrl' onChange={(e)=>(setImageUrl(e.target.value))} label="imageUrl" variant="filled" />
            </Grid>
        </Grid>
        <Button type='button' onClick={submitForm}>Submit</Button>
       </form> 
    );

}