document.addEventListener('DOMContentLoaded', () => {
    const height = document.getElementById('height-num');
    const weight = document.getElementById('weight-num');
    const calculateBtn = document.getElementById('calculate');
    const result = document.getElementById('result');
    const status = document.getElementById('situation');

    calculateBtn.addEventListener('click', () =>{
        const heightValue = parseFloat(height.value);
        const weightValue = parseFloat(weight.value);
    
        const finalResult = weightValue / (heightValue * heightValue);

        result.textContent = `Result: \n \n ${finalResult}`;
        
        if (finalResult < 18.5) {
            status.textContent = `Status: \n \n Underweight`;
        }
        else if(finalResult >= 18.5 && finalResult<= 24.9){
            status.textContent = `Status: \n \n Healthy weight`;
        }
        else if(finalResult >= 25.0 && finalResult<= 29.9){
            status.textContent = `Status: \n \n Overweight`;
        }
        else if (finalResult >= 30.0){
                status.textContent = `Status: \n \n Obese`;
        }
        else{
            status.textContent = `Status: \n \n There is something wrong in entering height and weight`;

        }
    })
    });
