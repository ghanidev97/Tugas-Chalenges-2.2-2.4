import React from 'react';
import Poto from './ghani.jpg';

const Username = (props) => (
    <h4 className="bg-primary text-white text-center p-2">
        <img src={Poto} width="50%"/>
        <br/>
        Nama : {props.Username} <br /> Jenis Kelamin :  {props.kelamin}
        <br/>
        Instuisi : {props.intuisi}
        <br/>
        Pasangan : {props.pasangan}
        <br/>
        Kesukaan : {props.kesukaan}
        <br/>
        Hoby : {props.hoby}
       
    </h4>
);

Username.defaultProps ={
    Username : "Ghani Muttaqin",
    kelamin : "Laki-Laki",
    intuisi : "Unikom",
    pasangan : "Indah pada masanya",
    kesukaan : "Suka kepada dia",
    hoby : "Rebahan",
};

export default Username;