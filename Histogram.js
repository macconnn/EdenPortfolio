var ctx = document.getElementById('chart').getContext('2d');

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Java", "Spring", "Python", "WebCrawler", "DataAnalysis" , "MySQL"],
        datasets: [{
            label: '# Ability value',
            data: [85 , 65 , 70 , 65 , 60 , 75 ,20 , 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(9, 80, 255, 0.2)',
                'rgba(9, 80, 255, 0.2)',
                'rgba(9, 80, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});