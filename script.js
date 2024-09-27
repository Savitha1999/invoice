document.addEventListener('DOMContentLoaded', () => 
    {
    document.getElementById('invoiceNumber').value = generateInvoiceNumber();
    
    document.getElementById('addItemButton').addEventListener('click', addItem);
    document.getElementById('generateInvoiceButton').addEventListener('click', generateInvoice);
    document.getElementById('printInvoiceButton').addEventListener('click', printInvoice);
});



function generateInvoiceNumber() {
    const date = new Date();
    return 'INV-' + date.getFullYear() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0') + '-' + Math.floor(Math.random() * 1000);
}

function addItem() {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item mb-3';
    itemDiv.innerHTML = `
        <label for="title">Title:</label>
        <input type="text" name="title" required class="form-control"><br>
        <label for="description">Description:</label>
        <input type="text" name="description" class="form-control"><br>
        <label for="price">Price:</label>
        <input type="number" name="price" step="0.01" required class="form-control"><br>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" required class="form-control"><br>
        <label for="unit">Unit:</label>
        <input type="text" name="unit" class="form-control"><br>
        <button type="button" onclick="removeItem(this)" class="btn btn-danger btn-sm">Remove Item</button>
    `;
    document.getElementById('invoiceForm').insertBefore(itemDiv, document.querySelector('button'));
}

function removeItem(button) 
{
    button.parentElement.remove();
}

function generateInvoice() 
{
    const invoiceForm = document.getElementById('invoiceForm');
    const formData = new FormData(invoiceForm);
    const invoiceData = [];
    const currentItem = {};

    formData.forEach((value, key) => {
        if (key === 'title' || key === 'description' || key === 'price' || key === 'quantity' || key === 'unit') {
            if (key === 'unit') {
                invoiceData.push({
                    title: currentItem.title,
                    description: currentItem.description,
                    price: parseFloat(currentItem.price),
                    quantity: parseInt(currentItem.quantity),
                    unit: currentItem.unit
                });
                Object.keys(currentItem).forEach(k => delete currentItem[k]);
            } else {
                currentItem[key] = value;
            }
        } else {
            currentItem[key] = value;
        }
    });

    const invoiceOutput = document.getElementById('invoiceOutput');
    let invoiceHTML = `
        <h2>Invoice</h2>
        <p><strong>Invoice Number:</strong> ${currentItem.invoiceNumber}</p>
        <p><strong>Business Name:</strong> ${currentItem.businessName}</p>
        <p><strong>Phone:</strong> ${currentItem.phone}</p>
        <p><strong>Address:</strong> ${currentItem.address}</p>
        <p><strong>Email:</strong> ${currentItem.email}</p>
        <p><strong>Client Name:</strong> ${currentItem.clientName}</p>
        <p><strong>Payment Date:</strong> ${currentItem.paymentDate}</p>
        <p><strong>Invoice Date:</strong> ${currentItem.invoiceDate}</p>
        <p><strong>Due Date:</strong> ${currentItem.dueDate}</p>
        <p><strong>Bill To:</strong> ${currentItem.billTo}</p>
        <p><strong>Ship To:</strong> ${currentItem.shipTo}</p>
        <p><strong>Order Number:</strong> ${currentItem.orderNumber}</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
    `;

    invoiceData.forEach(item => {
        const total = item.price * item.quantity;
        invoiceHTML += `
            <tr>
                <td>${item.title}</td>
                <td>${item.description}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>${item.unit}</td>
                <td>${total.toFixed(2)}</td>
            </tr>
        `;
    });

    invoiceHTML += `
            </tbody>
        </table>
    `;
    
    invoiceOutput.innerHTML = invoiceHTML;
    invoiceOutput.style.display = 'block'; 
}

function printInvoice() {
    const printContents = document.getElementById('invoiceOutput').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); 
}




const { jsPDF } = window.jspdf;

function addItem() {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item mb-3';
    itemDiv.innerHTML = `
        <label for="title">Title:</label>
        <input type="text" name="title" required class="form-control"><br>
        <label for="description">Description:</label>
        <input type="text" name="description" class="form-control"><br>
        <label for="price">Price:</label>
        <input type="number" name="price" step="0.01" required class="form-control"><br>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" required class="form-control"><br>
        <label for="unit">Unit:</label>
        <input type="text" name="unit" class="form-control"><br>
        <button type="button" onclick="removeItem(this)" class="btn btn-danger btn-sm">Remove Item</button>
    `;
    document.getElementById('invoiceForm').insertBefore(itemDiv, document.querySelector('button'));
}




function generateInvoice() 
{
    const invoiceForm = document.getElementById('invoiceForm');
    const formData = new FormData(invoiceForm);
    const invoiceData = [];
    const currentItem = {};

    formData.forEach((value, key) => {
        if (key === 'title' || key === 'description' || key === 'price' || key === 'quantity' || key === 'unit') {
            if (key === 'unit') {
                invoiceData.push({
                    title: currentItem.title,
                    description: currentItem.description,
                    price: parseFloat(currentItem.price),
                    quantity: parseInt(currentItem.quantity),
                    unit: currentItem.unit
                });
                Object.keys(currentItem).forEach(k => delete currentItem[k]);
            } else {
                currentItem[key] = value;
            }
        } else {
            currentItem[key] = value;
        }
    });

    const invoiceOutput = document.getElementById('invoiceOutput');
    let invoiceHTML = `
        <h2>Invoice</h2>
        <p><strong>Invoice Number:</strong> ${currentItem.invoiceNumber}</p>
        <p><strong>Business Name:</strong> ${currentItem.businessName}</p>
        <p><strong>Phone:</strong> ${currentItem.phone}</p>
        <p><strong>Address:</strong> ${currentItem.address}</p>
        <p><strong>Email:</strong> ${currentItem.email}</p>
        <p><strong>Client Name:</strong> ${currentItem.clientName}</p>
        <p><strong>Payment Date:</strong> ${currentItem.paymentDate}</p>
        <p><strong>Invoice Date:</strong> ${currentItem.invoiceDate}</p>
        <p><strong>Due Date:</strong> ${currentItem.dueDate}</p>
        <p><strong>Bill To:</strong> ${currentItem.billTo}</p>
        <p><strong>Ship To:</strong> ${currentItem.shipTo}</p>
        <p><strong>Order Number:</strong> ${currentItem.orderNumber}</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
    `;

    invoiceData.forEach(item => {
        const total = item.price * item.quantity;
        invoiceHTML += `
            <tr>
                <td>${item.title}</td>
                <td>${item.description}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>${item.unit}</td>
                <td>${total.toFixed(2)}</td>
            </tr>
        `;
    });

    invoiceHTML += `
            </tbody>
        </table>
    `;
    
    invoiceOutput.innerHTML = invoiceHTML;
    invoiceOutput.style.display = 'block'; 
}



function printInvoice() {
    const printContents = document.getElementById('invoiceOutput').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); 
}

function downloadInvoice() {
    const doc = new jsPDF();
    const invoiceContent = document.getElementById('invoiceOutput').innerText;

    doc.text("Invoice", 10, 10);
    doc.text(invoiceContent, 10, 20);
    doc.save("invoice.pdf");
}

        