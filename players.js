// 주어진 데이터
const playersData = [
    { Name: 'Faker', Team: 'T1', League: 'LCK', Position: "Mid"},
    { Name: 'Caps', Team: 'G2 Esports', League: 'LEC', Position: "Mid"},
    { Name: 'Doinb', Team: 'FPX', League: 'LPL', Position: "Mid"},
    { Name: 'Doublelift', Team: 'Team Liquid', League: 'LCS', Position: "Bot Lane"},
    { Name: 'Chovy', Team: 'Gen.G', League: 'LCK', Position: "Mid"}
];

// 테이블 생성 함수
function createTable(data) {
    // 테이블 요소 생성
    const table = document.createElement('table');

    // 테이블 헤더 생성
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ["Player Name", "Team", "League", "Position"];

    headers.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // 테이블 바디 생성
    const tbody = document.createElement('tbody');
    data.forEach(player => {
        const row = document.createElement('tr');

        // Name은 highlight 클래스를 추가
        Object.keys(player).forEach((key, index) => {
            const td = document.createElement('td');
            td.textContent = player[key];
            if (index === 0) td.classList.add('highlight'); // 첫 번째 열(Name)에 highlight 클래스 추가
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // 생성된 테이블을 .player-list에 추가
	const playerList = document.querySelector('.player-list');
	playerList.appendChild(table);
}

// 문서가 로드되면 실행
document.addEventListener("DOMContentLoaded", () => {
    createTable(playersData);
});
