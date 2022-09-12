const table = document.querySelector('tbody');
fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(data => {

    data.forEach(order => {
        let currentDate = moment(order.orderDate);

        if(currentDate.weekday() === 1){
        console.log(currentDate.tz('America/Los_Angeles'));
            table.innerHTML += `
                <tr>
                    <td>${order.customerId}</td>
                    <td>${order.shipName}</td>
                    <td>${currentDate.format("DD MMM YYYY")}</td>
                    <td>${moment(currentDate).add(30, 'days').format("DD MMM YYYY")}</td>
                    <td>${moment(currentDate).add(1, 'weeks').format("DD MMM YYYY")}</td>
                    <td>${currentDate.subtract(10, "days").format("DD MMM YYYY")}</td>
                </tr>
                `
        }
    });
})