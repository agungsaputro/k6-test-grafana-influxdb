import http from "k6/http"; 
import { sleep } from "k6"; 

let accessToken = ""; //Token Graphql

export let options = {
  stages: [
    { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
    'logged in successfully': ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export default function() { 
  let query = `     
  query getDpSementara{
    getDpSementara{
      namaIbuKandung
      tanggalLahirMahasiswa
      tempatLahirMahasiswa
      namaMahasiswa
      masaRegistrasiAwal
      ketValidasi
      nik
      nomorPassport
      batch
    }
  }`; //query
  
  let headers = {   
    'Authorization': `Bearer ${accessToken}`,   
    "Content-Type": "application/json"  
  };    

  let res = http.post("https://sia-api-cloud.ut.ac.id/graphql", // url graphql
    JSON.stringify({ query: query }),   
    {headers: headers}  
  );    

  sleep(0.3);   
};
