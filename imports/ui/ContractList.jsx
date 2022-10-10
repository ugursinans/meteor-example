import React from "react";
import {useTracker} from 'meteor/react-meteor-data';
import { ContractCollection } from "../api/ContractCollection";

export const ContractList = () => {
    const contractList = useTracker(()=>{
        return ContractCollection.find({}).fetch();
    });
    return (
        <div>
        <h2>Contract List Hop</h2>
        <ul>
            {contractList.map( (contract) => (
                <li key={contract.email}>
                    {contract.name} - {contract.email}
                </li>
            ))}
        </ul>
        </div>
    );
}