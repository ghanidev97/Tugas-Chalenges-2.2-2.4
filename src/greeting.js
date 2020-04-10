import React from 'react';

const Greetings = (props) => (
  <h4 className="bg-primary text-white text-center p-2">
    Hallo Selamat Datang Dengan Tugas Chalenges React App Pertama {props.nama} <br /> Umur saya sekarang {props.umur}{" "}
    Tahun
    <br />
    Kelamin Saya {props.kelamin} 
  </h4>
);
Greetings.defaultProps = {
  nama: "Ghani Muttaqin",
  umur: "23",
  kelamin: "Laki-Laki",
};
export default Greetings;