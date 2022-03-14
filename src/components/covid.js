import React, { useEffect, useState } from 'react';
import Card from './card';

function Covid() {

      const [data, setData] = useState([]);

      const getCovidData = async () => {
            try {
                  // const res = await fetch('https://covid.gov.pk/api/graphs/total_cases');
                  const res = await fetch('https://data.covid19india.org/data.json');
                  const actualData = await res.json();
                  // console.log(actualData.cases_time_series[actualData.cases_time_series.length - 1]);
                  const dataAll = actualData.cases_time_series[actualData.cases_time_series.length - 1]
                  setData(dataAll)
            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            getCovidData();
      }, [])

      const arrayData = [
            {
                  title: 'OUR COUNTRY',
                  body: 'PAKISTAN'
            }, {
                  title: 'TOTAL RECOVERED',
                  body: data.totalrecovered
            }, {
                  title: 'TOTAL CONFIRMED',
                  body: data.totalconfirmed
            }, {
                  title: 'TOTAL DEATH',
                  body: data.totaldeceased
            }, {
                  title: 'TOTAL ACTIVE',
                  body: data.dailydeceased
            }, {
                  title: 'LAST UPDATED',
                  body: data.date
            }
      ]

      return (
            <div>
                  <h1><a className='blink'>🔴</a> Live</h1>

                  <h2>COVID-19 Live Tracker</h2>

                  <div className="row">
                        {
                              arrayData.map((data, i) => {
                                    return (
                                          <Card key={i} title={data.title} body={data.body} />
                                    )
                              })
                        }
                  </div>
            </div>
      )
}

export default Covid
