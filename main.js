var count = 0;

function showinfo(){
    count++;
    if (count%2===1){
        document.getElementById("morein").innerHTML = "I'm 18 years old <br/> Now, i don't have work";
    }else{
        document.getElementById("morein").innerHTML = "";
    }
}

var count2 =0;
function showcontact(){
    count2++;
    if (count2%2===1){
        document.getElementById("foot").style.display = "block";
    }else{
        document.getElementById("foot").style.display = "none";
    }
}

document.getElementById('chanf').addEventListener('click', function() {
    const currentSrc = this.src;
    const newSrc = currentSrc.includes('me.jpg') ? 'media/me2.png' : 'media/me.jpg';
    this.src = newSrc;
    });


    function addTask() {
        const taskInput = document.getElementById('new-task');
        const taskValue = taskInput.value.trim();
        if (taskValue === "") {
            alert("You must type something");
            return;
        }
        const li = document.createElement('li');
        li.innerText = taskValue;
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function () {
        li.remove();
        };
        li.appendChild(deleteBtn);
        li.onclick = function () {
        li.classList.toggle('completed');
        };

        const taskList = document.getElementById('task-list');
        taskList.appendChild(li);
        taskInput.value = '';
    }

    document.getElementById('numberForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const input = document.getElementById('numbers').value.trim();
        const sortOrder = document.getElementById('sortOrder').value;
        const resultDiv = document.getElementById('resultsor');
        let numberArray = input.split(' ').map(num => parseFloat(num.trim()));

        if (numberArray.some(isNaN)) {
            alert('Please make sure to enter only numbers.');
            return;
        }

        if (sortOrder === 'asc') {
            numberArray.sort((a, b) => a - b);
        } else if (sortOrder === 'desc') {
            numberArray.sort((a, b) => b - a);
        }

        resultDiv.innerHTML = `<strong>Sorted Numbers:</strong> ${numberArray.join(', ')}`;
        });
        function calculateTax() {
            const price = parseFloat(document.getElementById('price').value);
            let tax;
    
            if (isNaN(price) || price <= 0) {
                alert("Please enter a valid price.");
                return;
            }
    
            if (price > 10000) {
              tax = price * 0.25;
            } else if (price >= 5000) {
              tax = price * 0.20;
            } else {
              tax = price * 0.15;
            }
    
            document.getElementById('taxResult').innerHTML = `Tax to be paid: $${tax.toFixed(2)}`;
        }