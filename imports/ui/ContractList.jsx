import React from "react";
import {useTracker} from 'meteor/react-meteor-data';
import { ContractCollection } from "../api/ContractCollection";
import {Meteor} from 'meteor/meteor';
import {useFind,useSubscribe} from 'meteor/react-meteor-data'
export const ContractList = (() => {

    const isLoading = useSubscribe('ListOfContracts');
    const contractList = useFind(()=>{
        return ContractCollection.find({});//,{sort:{CreatedDate : -1}}
    });
    deleteContract= (e,id) =>{
        Meteor.call('deleteContract',{id});
    }
    return (
        <div>
        <h2>Contract List Hop</h2>
        <ul>
            {isLoading() && <p>Loading</p>}
            {contractList.map( (contract) => (
               <ContractListItem  key={contract._id} contract={contract}/>
            ))}
        </ul>
        </div>
    );
});

const ContractListItem = React.memo(({contract}) => {
    console.log('hop');
return (
    <li>
        {contract.name} - {contract.email}
        <button type ="button" onClick={(e) =>deleteContract(e,contract._id)}>Delete</button>
    </li>
);
});