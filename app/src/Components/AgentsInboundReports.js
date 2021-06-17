import React, { useState } from 'react';
import axios from "axios";
import CsvDownload from 'react-json-to-csv'

export default function AgentsInboundReports() {

    var name = ""
    var password = ""
    
    const [data, setData] = useState();
    const [number, setNumber] = useState("");
    const API_URL = 'https://motion12.tcg.lt';

  const getData = (e) => {
    if(number.length > 3){
        e.preventDefault();
      return axios.get(API_URL + `/api/voice/agents/reports?sort=-updatedAt&type=inbound&calleridnum=${number}&limit=25`, {
          headers: {
              'Authorization': 'Basic ' + btoa(`${name}:${password}`)
          }
      }
      )
        .then((response) => {
            setData(response.data.rows)
            console.log(data)
        },
          (error) => {
            console.log(error)
            }
        );
      }
    e.preventDefault();
    return axios.get(API_URL + "/api/voice/agents/reports?sort=-updatedAt&type=inbound&limit=25", {
        headers: {
            'Authorization': 'Basic ' + btoa(`${name}:${password}`)
        }
    }
    )
      .then((response) => {
          setData(response.data.rows)
          console.log(data)
      },
        (error) => {
          console.log(error)
          }
      );
  }


  return (
      <div>
          <h2>Get Agents Inbound Reports</h2>
          <form>
              <div className="form-group mx-auto my-2" style={{ display: "flex", float: "center", width: 200 }}>
                  <input onChange={e => setNumber(e.target.value)} type="search" className="form-control" id="number" placeholder="Filter by number" />
              </div>
          </form>

          <button type="button" className="btn btn-info mx-2" onClick={getData}>Get</button>
          <CsvDownload type="button" className="btn btn-info my-2" data={data} />
      </div>
  )
}