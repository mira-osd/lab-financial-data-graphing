const apiUrl = 'http://api.coindesk.com/v1/bpi/historical/close.json';

axios
  .get(apiUrl)
  .then(response => {
    const date = Object.keys(response.data.bpi);
    const value = Object.values(response.data.bpi)
    printGraph(date, value)
  })
  .catch(err => console.log("Error while getting the data: ", err));

  const printGraph = (dat, val) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dat,
        datasets: [
          {
            label: "Bitcoin Price ìndex",
            data: val
          }
        ]
      }
    });
  };