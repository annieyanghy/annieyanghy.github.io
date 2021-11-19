// Most Useful Chart

let alreadyLoaded2 = false;
window.addEventListener("scroll", function () {
  if (alreadyLoaded2 === false) {
    var element = document.querySelector("#chart_div_fav");
    var position = element.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      // checking for partial visibility
      if (position.top < window.innerHeight && position.bottom >= 0) {
        alreadyLoaded2 = true;
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
            [
              "Features",
              "# of participants",
              { role: "style" },
              { role: "annotation" },
            ],
            ["Focus Toggle", 4, "fill-color:111111;", "4"],
            ["Focus Timer", 3, "fill-color:111111;", "3"],
            ["Task Breaker", 1, "fill-color:111111;", "1"],
          ]);

          // Set chart options
          var options = {
            animation: {
              duration: 1000,
              easing: "in",
              startup: true, //This is the new option
            },
            chart: {
              title: "Most Helpful Feature",
              subtitle: "Sales, Expenses, and Profit: 2014-2017",
            },
            bars: "horizontal",

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
            annotations: {
              textStyle: {
                fontName: "Open Sans",
                fontSize: 14,
                bold: 0,
                italic: false,
                // The color of the text.
                color: "white",

                // The transparency of the text.
                opacity: 1,
              },
            },

            hAxis: {
              title: "# of participants",

              minValue: 0,
              maxValue: 10,
             
            },
            vAxis: {
              title: "Features",
             
            },
          };

          // Instantiate and draw our chart, passing in some options.
          var chart = new google.charts.Bar(
            document.getElementById("chart_div_fav")
          );

          chart.draw(data, google.charts.Bar.convertOptions(options));
        }
      }
    }
  }
});
