import React from "react";
import {useTracker} from 'meteor/react-meteor-data';
import { ContractCollection } from "../api/ContractCollection";
import {Meteor} from 'meteor/meteor';
export const ContractList = () => {
    const contractList = useTracker(()=>{
        return ContractCollection.find({}).fetch();
    });
    deleteContract= (e,id) =>{
        console.log("hopppp: "+id);
        Meteor.call('deleteContract',{id});
    }
    return (
        <div>
        <h2>Contract List Hop</h2>
        <ul>
            {contractList.map( (contract) => (
                <li key={contract.email}>
                    {contract.name} - {contract.email}
                    <button type ="button" onClick={(e) =>deleteContract(e,contract._id)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    );
}