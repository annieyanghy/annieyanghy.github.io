// Most Useful Chart

let alreadyLoaded = false;
window.addEventListener("scroll", function () {
  if (alreadyLoaded === false) {
    var element = document.querySelector("#chart_div_tasks");
    var position = element.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      console.log("hi");

      // checking for partial visibility
      if (position.top < window.innerHeight && position.bottom >= 0) {
        alreadyLoaded = true;
        // Load the Visualization API and the bar chart package.
        google.charts.load("current", { packages: ["bar"] });
        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawBasic);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawBasic() {
          // Create our data table.
          var data = google.visualization.arrayToDataTable([
            ["Task", "Success Rate (%)"],
            ["Start a focus timer", 100],
            ["Toggle a focus event", 80],
            ["Schedule a focus event", 50],
            ["Break tasks down", 30],
          ]);

          // Set chart options
          var options = {
            animation: {
              duration: 1000,
              easing: "in",
              startup: true, //This is the new option
            },
            chart: {
              title: "Task Success Rate",
              subtitle: "Sales, Expenses, and Profit: 2014-2017",
            },
            // chartArea:{
            //     width:'80%',
            // },
            bars: "horizontal",
            width:'100%',
            bar: { groupWidth: '60%' },
   
            backgroundColor: "#FAFAFA",
            fontSize: 14,
            fontName: "Open Sans",

            titleTextStyle: {
              color: "#666",
              fontName: "Open Sans",
              fontSize: 18,
              bold: 1,
              italic: 0,
            },
            legend: { position: "none" },
            // annotations: {
            //     textStyle: {
            //         fontName: 'Open Sans',
            //         fontSize: 14,
            //         bold: 0,
            //         italic: false,
            //         // The color of the text.
            //         color: 'white',

            //         // The transparency of the text.
            //         opacity: 1
            //     }
            // },

            hAxis: {
              title: "%",
              minValue: 0,
              maxValue: 100,
            
            },
            vAxis: {
              title: "Tasks",
            
            },
          };

          // Instantiate and draw our chart, passing in some options.
          var chart = new google.charts.Bar(
            document.getElementById("chart_div_tasks")
          );

          chart.draw(data, google.charts.Bar.convertOptions(options));
        }
      }
    }
  }
});
