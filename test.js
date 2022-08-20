window.addEventListener('message', (event) => {
  console.log(event.data);
  console.log(JSON.parse(event.data));
  generateChart(JSON.parse(event.data));
});

const fdata = [
  {
    _id: '07ae7a3f-7f22-4e5b-a919-25bee5e38131',
    _owner: '0c3a27ab-cd46-464b-ad29-0851efb863a4',
    _createdDate: 'Wed Aug 17 2022 14:27:57 GMT+0530 (India Standard Time)',
    waterTemperature: 20,
    _updatedDate: 'Wed Aug 17 2022 14:27:57 GMT+0530 (India Standard Time)',
    dateTime: 'Sat Jan 01 2022 13:42:00 GMT+0530 (India Standard Time)',
    'link-do-readings-title': '/do-readings/',
    doReading1: 100,
    doReading: 7.2,
  },
  {
    _id: '8ba1f3a1-7c34-4d75-b467-c2de4042e5fe',
    _owner: '0c3a27ab-cd46-464b-ad29-0851efb863a4',
    _createdDate: 'Wed Aug 17 2022 14:27:57 GMT+0530 (India Standard Time)',
    waterTemperature: 21,
    _updatedDate: 'Wed Aug 17 2022 14:27:57 GMT+0530 (India Standard Time)',
    dateTime: 'Mon Jan 03 2022 01:15:00 GMT+0530 (India Standard Time)',
    'link-do-readings-title': '/do-readings/',
    doReading1: 98,
    doReading: 9,
  },
  {
    _id: '404dd3fc-2b8b-4320-8cc5-342c86b9cb40',
    _owner: '0c3a27ab-cd46-464b-ad29-0851efb863a4',
    _createdDate: 'Wed Aug 17 2022 14:27:57 GMT+0530 (India Standard Time)',
    waterTemperature: 22,
    _updatedDate: 'Wed Aug 17 2022 14:27:57 GMT+0530 (India Standard Time)',
    dateTime: 'Mon Jan 03 2022 14:51:00 GMT+0530 (India Standard Time)',
    'link-do-readings-title': '/do-readings/',
    doReading1: 110,
    doReading: 8.1,
  },
  {
    _id: '23a4c149-0675-429f-b967-2ea8a1087eec',
    _owner: '0c3a27ab-cd46-464b-ad29-0851efb863a4',
    _createdDate: 'Wed Aug 17 2022 14:27:57 GMT+0530 (India Standard Time)',
    waterTemperature: 17,
    _updatedDate: 'Wed Aug 17 2022 14:27:57 GMT+0530 (India Standard Time)',
    dateTime: 'Tue Jan 04 2022 13:18:00 GMT+0530 (India Standard Time)',
    'link-do-readings-title': '/do-readings/',
    doReading1: 80,
    doReading: 7.4,
  },
];

let chartData = {
  labels: [],
  datasets: [
    {
      label: 'DO',
      backgroundColor: '#5f759b',
      data: [],
      fill: false,
      borderColor: '#5f759b',
    },
    {
      label: 'Do Reading',
      backgroundColor: '#b18b65',
      data: [],
      fill: false,
      borderColor: '#b18b65',
    },
    {
      label: 'Water Temperature',
      backgroundColor: '#f87979',
      data: [],
      fill: false,
      borderColor: '#f87979',
    },
  ],
};
function generateChart(data) {
  console.log(data);

  data.items.forEach((item) => {
    const dateObj = new Date(item.dateTime);
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    chartData.labels.push(`${day}/${month}/${year}`);
    chartData.datasets[0].data.push(item.doReading);
    chartData.datasets[1].data.push(item.doReading1);
    chartData.datasets[2].data.push(item.waterTemperature);
  });

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
