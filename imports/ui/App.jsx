import React from 'react';
import { ContractForm } from './ContractForm';
import { ContractList } from './ContractList';

export const App = () => (
  <div>
    <h1>MeteorWallet</h1>
    <ContractForm/>
    <ContractList/>
  </div>
);
