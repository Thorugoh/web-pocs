export function Orders() {
    return(
        <div>
            <h1>Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>John Doe</td>
                        <td>$100.00</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Jane Smith</td>
                        <td>$150.00</td>
                    </tr>
                </tbody>
            </table>    
        </div>

    )
}