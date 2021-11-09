// Most Useful Chart


let alreadyLoaded = false ;     
window.addEventListener('scroll', function(){
if (alreadyLoaded === false){

        var element = document.querySelector('#chart_div_tasks');
        var position = element.getBoundingClientRect();
    
    
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
          console.log('hi');

    
        // checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
        alreadyLoaded = true;  
        // Load the Visualization API and the bar chart package.
        google.charts.load('current', {packages: ['corechart', 'bar']});   
        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawBasic);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
                function drawBasic() {

                // Create our data table.
                var data = google.visualization.arrayToDataTable([
                    ['Task', 'Success %',{ role: 'style' },{ role: 'annotation' }],
                    ['Start a focus timer', 100,'fill-color:#111111;','100%'],
                    ['Toggle a focus event',  80,'fill-color:#111111;','80%'],
                    ['Schedule a focus event', 50,'fill-color:#111111;','50%'],
                    ['Break tasks down', 30,'fill-color:#111111;','30%'],
                
                ]);

                // Set chart options
                var options = {
                
                    animation: {
                        duration: 1000,
                        easing:'in',
                        startup: true //This is the new option
                    },
                    title: 'Task Success Rate',
                    titleTextStyle: { 
                        color: '#666',
                        fontName: 'Open Sans',
                        fontSize: 18,
                        bold: 1,
                        italic: 0 
                    },
                    legend: { position: 'none' },
                    annotations: {
                        textStyle: {
                            fontName: 'Open Sans',
                            fontSize: 14,
                            bold: 0,
                            italic: false,
                            // The color of the text.
                            color: 'white',
                          
                            // The transparency of the text.
                            opacity: 1
                        }
                    },
                    backgroundColor: '#FAFAFA',
                    width:'60%',
                    // height:400,
                 
                    fontSize:14,
                    fontName:'Open Sans',
                
                    chartArea: {
                    width: '40%',
                    height:250,
                    backgroundColor:'white',
                    // padding:'40px'
                    },
                    bar: {groupWidth: "60%"},
                    
                    
                    hAxis: {
                    title: '%',
                    titleTextStyle: { 
                        color: '#666',
                        fontName: 'Open Sans',
                        fontSize: 16,
                        bold: 0,
                        italic: 0 
                    },
                    minValue: 0,
                    maxValue:100,
                    textStyle: { 
                        color: 'grey',
                    }
                    

                    },
                    vAxis: {
                    title: 'Tasks',
                    textStyle: { 
                        color: 'grey',
                    }
                    
                    
                    }
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.BarChart(document.getElementById('chart_div_tasks'));

                chart.draw(data, options);
                }
            }
        }
    }
});