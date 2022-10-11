import {Meteor} from 'meteor/meteor';
import { ContractCollection } from './ContractCollection';

Meteor.publish('ListOfContracts',()=>{
    return ContractCollection.find();
})