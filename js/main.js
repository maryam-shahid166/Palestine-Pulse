document.getElementById('subscribeButton').addEventListener('click', function() {
    var emailInput = document.getElementById('form5Example2');
    var subscribeMessage = document.getElementById('subscribeMessage');
    
    if (emailInput.value) {
      subscribeMessage.style.display = 'block';
      subscribeMessage.style.color = 'green'; 
      subscribeMessage.innerHTML = 'You have subscribed successfully!';
    } else {
      subscribeMessage.style.display = 'block';
      subscribeMessage.style.color = 'red';
      subscribeMessage.innerHTML = 'Please enter a valid email address.';
    }
  });
  
  document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    var firstName = document.getElementById('firstName').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var formMessage = document.getElementById('formMessage');
    
    if (firstName && surname && email && phone && message) {
      formMessage.style.display = 'block';
      formMessage.style.color = 'green';
      formMessage.innerHTML = 'Your form has been submitted successfully!';
    } else {
      formMessage.style.display = 'block';
      formMessage.style.color = 'red'; 
      formMessage.innerHTML = 'Please fill in all fields.';
    }
  });
  