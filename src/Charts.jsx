import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Box, Flex } from "@chakra-ui/react";
import Table from "./components/Table";

function Charts(){
  const api_data =  {
        "SECTOR": [
            {
                "csbd_typename": "Communication Services",
                "csbd_equity": 557825440,
                "csbd_currval": 557825440,
                "csbd_weight": 16.19671280608765,
                "csbd_retprc": 0
            },
            {
                "csbd_typename": "Consumer Cyclical",
                "csbd_equity": 6184586400,
                "csbd_currval": 1164207440,
                "csbd_weight": 33.80328719391235,
                "csbd_retprc": -81.17566212673493
            },
            {
                "csbd_typename": "Financial Services",
                "csbd_equity": 557825440,
                "csbd_currval": 557825440,
                "csbd_weight": 16.19671280608765,
                "csbd_retprc": 0
            },
            {
                "csbd_typename": "Technology",
                "csbd_equity": 1164157440,
                "csbd_currval": 1164207440,
                "csbd_weight": 33.80328719391235,
                "csbd_retprc": 0.004294951720619507
            }
        ]
    }

    const data = {
        labels: api_data.SECTOR.map((data)=>data.csbd_typename),
        datasets: [
            {
            backgroundColor:["#7fc2f2", "#55525e", "#8ae0a8", "#f5b78a"],
            borderColor: "white",
            data: api_data.SECTOR.map((data)=>data.csbd_weight),
            },
        ],
        datalabels: {
            labels: {
              index: {
                color: '#404040',
                font: {
                  size: 18,
                },
                formatter: (val, context) =>  context.chart.data.labels[context.dataIndex],
                align: 'end',
                anchor: 'end',
              },
             
            },
        },
    };

    useEffect(()=>{
        Chart.register(ChartDataLabels);
    },[])

    return (
        <Flex direction={"row"} align={"center"} height={"100%"} width={"100%"} gap={"100px"}>
            <Flex flex={"40%"}>
                <Doughnut 
                    data={data}
                    options={{
                        responsive: true,
                        layout:{
                            padding: 70
                        },
                        plugins:{
                            legend: {
                                display: false,
                            },
                            datalabels: {
                                align: 'end',
                                anchor: 'end',
                                display: true,
                                formatter: function(value, context){
                                    return context.chart.data.labels[context.dataIndex]
                                },
                                font: {
                                    weight: 'bold',
                                    size:8
                                }
                            }
                        }
                    }}
                />
            </Flex>
            <Flex flex={"70%"}>
                <Table data={api_data.SECTOR}/>
            </Flex>
        </Flex>
    );
}

export default Charts;