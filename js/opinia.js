document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('opinionForm');
    const clearButton = document.getElementById('clearTable');

    const initialData = [

        {
            imie: 'Andrew',
            nazwisko: 'Golara',
            Ocena_melod: 'Tragiczna',
            Ocena_tekst: 'Świetny',
            opinie: 'całkiem przyjemna piosenka',
            Data_opinii: '2024-02-01',
            skillsRange: '6'
        },
        {
            imie: 'Marcin',
            nazwisko: 'Śledź',
            Ocena_melod: 'Średnia',
            Ocena_tekst: 'Średni',
            opinie: 'może być',
            Data_opinii: '2024-02-03',
            skillsRange: '5'
        },
        {
            imie: 'Max',
            nazwisko: 'Kolanko',
            Ocena_melod: 'Świetna',
            Ocena_tekst: 'Świetny',
            opinie: 'genialna piosenka',
            Data_opinii: '2024-02-07',
            skillsRange: '10'
        },
        {
            imie: 'Kuba',
            nazwisko: 'Kowalski',
            Ocena_melod: 'Bardzo Dobra',
            Ocena_tekst: 'Średni',
            opinie: 'git',
            Data_opinii: '2024-02-15',
            skillsRange: '8'
        },
        {
            imie: 'Robert',
            nazwisko: 'Lewandowski',
            Ocena_melod: 'Świetna',
            Ocena_tekst: 'Bardzo Dobry',
            opinie: 'slucham przed meczem',
            Data_opinii: '2024-02-11',
            skillsRange: '8'
        },
        {
            imie: 'Antoni',
            nazwisko: 'Kowal',
            Ocena_melod: 'Średnia',
            Ocena_tekst: 'Słaby',
            opinie: 'nic specjalnego',
            Data_opinii: '2024-02-06',
            skillsRange: '6'
        },

    ];

    let tableData = loadTableData();

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const newOpinion = {

            imie: document.getElementById('imie').value,
            nazwisko: document.getElementById('nazwisko').value,
            Ocena_melod: document.getElementById('Ocena_melod').value,
            Ocena_tekst: document.getElementById('Ocena_tekst').value,
            opinie: document.getElementById('opinie').value,
            Data_opinii: document.getElementById('Data_opinii').value,
            skillsRange: document.getElementById('skillsRange').value

        };

        tableData.push(newOpinion);
        localStorage.setItem('opinions', JSON.stringify(tableData.slice(initialData.length)));

        refreshTable();
        form.reset();

    });

    clearButton.addEventListener('click', function () {

        localStorage.removeItem('opinions');
        tableData = loadTableData();
        refreshTable();

    });

    function loadTableData() {

        const storedData = JSON.parse(localStorage.getItem('opinions')) || [];
        return [...initialData, ...storedData];

    }

    function refreshTable() {
        const tableBody = document.getElementById('Tabela_opini').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = '';
        insertDataIntoTable(tableData);
    }

    function insertDataIntoTable(data) {

        const tableBody = document.getElementById('Tabela_opini').getElementsByTagName('tbody')[0];

        data.forEach(rowData => {
            const newRow = document.createElement('tr');
            Object.values(rowData).forEach(text => {
                const cell = document.createElement('td');
                cell.textContent = text;
                newRow.appendChild(cell);
            });
            tableBody.appendChild(newRow);
        });

    }

    refreshTable();

});