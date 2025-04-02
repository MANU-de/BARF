
        function calculateFood() {
            // Get input values
            const breedSize = document.getElementById('breed-size').value;
            const age = parseFloat(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);

            // Basic validation
            if (isNaN(age) || isNaN(weight) || age <= 0 || weight <= 0) {
                alert('Please enter valid age and weight values');
                return;
            }

            // Calculate base percentage of body weight for food
            let basePercentage;
            if (age < 1) {
                basePercentage = 0.08; // 8% for puppies
            } else if (age > 7) {
                basePercentage = 0.02; // 2% for senior dogs
            } else {
                basePercentage = 0.03; // 3% for adult dogs
            }

            // Adjust based on breed size
            switch(breedSize) {
                case 'small':
                    basePercentage *= 1.2;
                    break;
                case 'large':
                    basePercentage *= 0.8;
                    break;
            }

            // Calculate total daily amount in grams
            const totalGrams = weight * 1000 * basePercentage;

            // Calculate meat (80%) and vegetables (20%) portions
            const meatGrams = totalGrams * 0.8;
            const vegGrams = totalGrams * 0.2;

            // Display results
            const resultDiv = document.getElementById('result');
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
                <h3>Daily Food Recommendation:</h3>
                <p>Total food: ${Math.round(totalGrams)}g per day</p>
                <p>Meat portion: ${Math.round(meatGrams)}g (80%)</p>
                <p>Vegetable portion: ${Math.round(vegGrams)}g (20%)</p>
                <p><small>Note: This is a basic calculation.</small></p>
            `;
        }
    