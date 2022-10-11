import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check'
import {ContractCollection} from './ContractCollection'

Meteor.methods({
    'insertContract'({name,email,imageUrl}){
        let validation = true;
        check(name,String);
        check(imageUrl,String);
        check(email,String);

        if(!validation){
            throw new Meteor.Error('Name is required');
        }
        return ContractCollection.insert({name,email,imageUrl});
    },
    'deleteContract'({id}){
        check(id,String)
        return ContractCollection.remove({_id:id});
    }
});  