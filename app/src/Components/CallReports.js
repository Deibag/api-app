import React, { useState } from 'react';
import axios from "axios";
import CsvDownload from 'react-json-to-csv'


export default function CallReports() {

    var name = ""
    var password = ""
    
    const [data, setData] = useState();
    const API_URL = 'https://motion12.tcg.lt';

  const getData = (e) => {
    e.preventDefault();
    return axios.get(API_URL + "/api/voice/calls/reports?sort=-updatedAt&limit=25", {
        headers: {
            'Authorization': 'Basic ' + btoa(`${name}:${password}`)
        }
    }
    )
      .then((response) => {
          setData(response.data.rows)
      },
        (error) => {
          console.log(error)
          }
      );
  }


  return (
      <div>
          <h2>Get Call Reports</h2>
          <button type="button" className="btn btn-info mx-2" onClick={getData}>Get</button>
          <CsvDownload type="button" className="btn btn-info my-2" data={data} />
      </div>
  )
}