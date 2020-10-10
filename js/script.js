        //login button event handler
        var loginBtn = document.getElementById('login');
        loginBtn.addEventListener('click', function () {
            const loginArea = document.getElementById('login-area');
            loginArea.style.display = 'none';
            const transactionArea = document.getElementById('transaction-area');
            transactionArea.style.display = 'block';
  
        });


        //deposit button event handler
        const depositBtn = document.getElementById('deposit-btn');
        depositBtn.addEventListener('click', function () {
        
        const depositNumber = getInputNumber('deposit-amount');

        updateSpanText('current-balance', depositNumber);
        updateSpanText('current-deposit', depositNumber);

        document.getElementById('deposit-amount').value = "";
    
        });

        // withdraw button event handler
        const withdrawBtn = document.getElementById('withdraw-btn');
        withdrawBtn.addEventListener('click', function () {
          
        const withdrawNumber = getInputNumber('withdraw-amount');
        

        updateSpanText("current-withdraw", withdrawNumber);
        updateSpanText('current-balance',-1* withdrawNumber );

        document.getElementById('withdraw-amount').value = "";

     


       });


        //get input number 
        function getInputNumber(id) {
        var amount = document.getElementById(id).value;
        var amountNumber = parseFloat(amount);
        return amountNumber;
        };

        // update span text 
        function updateSpanText (id, depositNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = depositNumber + currentNumber;
        document.getElementById(id).innerText = totalAmount;

        };