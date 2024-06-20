const deliveryFee = 50;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Function to open image pop-up

    function openImagePopup(imageSrc) {
        var overlay = document.getElementById('overlay');
        var popup = document.createElement('div');
        popup.classList.add('image-popup');
        var img = document.createElement('img');
        img.src = imageSrc;
        popup.appendChild(img);
        overlay.appendChild(popup);
        overlay.style.display = 'block';
        overlay.onclick = function(event) {
            if (event.target === overlay) {
                closeImagePopup();
            }
        };
    }

    // Function to close image pop-up
    function closeImagePopup() {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        overlay.innerHTML = '';
    }

        function displayCartSummary() {
            const cartSummaryContainer = document.getElementById('cart-summary-container');
            cartSummaryContainer.innerHTML = '';

            let totalAmount = 0;

            const cartTable = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');
            const headerRow = document.createElement('tr');

            const headers = ['', 'Item', 'Quantity', 'Price', 'Total'];

            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText;
                headerRow.appendChild(header);
            });

            thead.appendChild(headerRow);
            cartTable.appendChild(thead);

            cart.forEach((item, index) => {
                const baseRow = document.createElement('tr');

                const baseImgCell = document.createElement('td');
                const baseImg = document.createElement('img');
                baseImg.src = item.base.src;
                baseImg.alt = item.base.title;
                baseImgCell.appendChild(baseImg);
                baseRow.appendChild(baseImgCell);

                const nameCell = document.createElement('td');
                nameCell.textContent = item.base.title;
                baseRow.appendChild(nameCell);

                const quantityCell = document.createElement('td');
                quantityCell.textContent = item.baseQuantity;
                baseRow.appendChild(quantityCell);

                const amountCell = document.createElement('td');
                amountCell.textContent = `₱${item.base.price}`;
                baseRow.appendChild(amountCell);

                const baseTotal = item.base.price * item.baseQuantity;
                const baseTotalAmountCell = document.createElement('td');
                baseTotalAmountCell.textContent = `₱${baseTotal}`;
                baseRow.appendChild(baseTotalAmountCell);

                tbody.appendChild(baseRow);

                if (item.addons.length > 0) {
                    item.addons.forEach(addon => {
                        const addonRow = document.createElement('tr');

                        const addonImgCell = document.createElement('td');
                        const addonImg = document.createElement('img');
                        addonImg.src = addon.imgSrc;
                        addonImg.alt = addon.name;
                        addonImg.style.width = '25px';
                        addonImg.style.height = '25px';
                        addonImgCell.appendChild(addonImg);
                        addonRow.appendChild(addonImgCell);

                        const addonNameCell = document.createElement('td');
                        addonNameCell.textContent = addon.name;
                        addonRow.appendChild(addonNameCell);

                        const addonQuantityCell = document.createElement('td');
                        addonQuantityCell.textContent = addon.quantity;
                        addonRow.appendChild(addonQuantityCell);

                        const addonAmountCell = document.createElement('td');
                        addonAmountCell.textContent = `₱${addon.price}`;
                        addonRow.appendChild(addonAmountCell);

                        const addonTotalAmountCell = document.createElement('td');
                        addonTotalAmountCell.textContent = `₱${addon.price * addon.quantity}`;
                        addonRow.appendChild(addonTotalAmountCell);

                        const emptyCell = document.createElement('td');
                        addonRow.appendChild(emptyCell);

                        tbody.appendChild(addonRow);
                    });
                }

                const addonsTotal = item.addons.reduce((acc, addon) => acc + addon.price * addon.quantity, 0);
                totalAmount += baseTotal + addonsTotal;
            });

            cartTable.appendChild(tbody);
            cartSummaryContainer.appendChild(cartTable);

            const totalAmountDiv = document.createElement('div');
            totalAmountDiv.classList.add('total-amount');
            totalAmountDiv.textContent = `Subtotal: ₱${totalAmount}`;
            cartSummaryContainer.appendChild(totalAmountDiv);

            const deliveryFeeDiv = document.createElement('div');
            deliveryFeeDiv.classList.add('delivery-fee');
            deliveryFeeDiv.textContent = `Delivery Fee: ₱${deliveryFee}`;
            cartSummaryContainer.appendChild(deliveryFeeDiv);

            const finalTotalDiv = document.createElement('div');
            finalTotalDiv.classList.add('final-total');
            finalTotalDiv.textContent = ` Total Amount: ₱${totalAmount + deliveryFee}`;
            cartSummaryContainer.appendChild(finalTotalDiv);

            document.addEventListener('DOMContentLoaded', function() {
                let popup = document.getElementById("popup")
                let overlay = document.getElementById("overlay");

                function openPopup(){
                    popup.classList.add("open-popup")
                    overlay.classList.add("open-overlay");
                }
                function closePopup(){
                    popup.classList.remove("open-popup")
                    window.location.href='menu.html';
                    overlay.classList.remove("open-overlay");
                }
                const checkoutButton = document.getElementById('cobtn');
                checkoutButton.addEventListener('click', function(event) {
                    const alertDiv = document.getElementById('alert');
                    if (!addressInput.value){
                        alertDiv.classList.add('show');
                        alertDiv.classList.remove('hide');
                        alertDiv.classList.add('showAlert');
                        setTimeout(() => {
                            alertDiv.classList.remove('show');
                            alertDiv.classList.add('hide');
                        }, 2000);
                    }else{
                        event.preventDefault();
                        openPopup();
                        localStorage.removeItem('cart');
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                });
                const okButton = document.querySelector('.popup button');
                okButton.addEventListener('click', closePopup);
                    
            });
        }

displayCartSummary();

function openpayment1(){

}

