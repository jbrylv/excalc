document.getElementById('form1').addEventListener('submit', function (event) {
    event.preventDefault();
    const n = parseFloat(document.getElementById('n').value);
    const d = parseInt(document.getElementById('d').value);
    function calculateAQ(n, d) {
        let AQ = [n];
        let E = [n];

        for (let i = 1; i <= d; i++) {
            let lastAQ = AQ[i - 1];
            let lastE = E[i - 1];

            let newAQ = lastE - (lastE * 0.095);
            let newE = (lastE + newAQ) / 6;

            AQ.push(newAQ);
            E.push(newE);
        }

        return AQ[d];
    }

    const result = calculateAQ(n, d);
    document.getElementById('result').textContent = `LIQ: ${result.toFixed(4)}`;
});




document.getElementById('form2').addEventListener('submit', function (event) {
    event.preventDefault();
    const FP = parseFloat(document.getElementById('fp').value);
    const TC = parseInt(document.getElementById('tc').value);
    function calculateTotal() {

        let total = 0;

        if (TC === 1 || TC === 2) {
            total = FP * TC;
        } else {
            total = FP * (2 + 2 * (Math.pow(2, TC - 2) - 1));
        }
        
        document.getElementById('result2').textContent = `Total: ${total.toFixed(2)}`;

    }
    calculateTotal();
});
