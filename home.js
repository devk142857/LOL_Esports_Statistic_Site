// 챔피언 데이터 배열 (이미지명, alt, 표시이름)
const TournamentsData = [
	{ Year: 2025, League: 'LCK', Name: 'LCK Cup 2025'},
	{ Year: 2025, League: 'LPL', Name: 'LPL 2025 Split 1'},
	{ Year: 2025, League: 'LEC', Name: 'LEC 2025 Winter Season'},
	{ Year: 2025, League: 'LCK CL', Name: '2025 LCK Challengers League Kickoff'},
	{ Year: 2024, League: 'LCK', Name: 'Kespa Cup'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
	{ Year: 2020, League: 'LCK', Name: 'Summer split'},
];
  
// 목록 생성 함수
function createTournamentsList() {
	// 토너먼트를 최근 15개만 추출하여 리스트 생성
	const ul = document.createElement('ul');
	const rowData = TournamentsData.slice(0, 15);

	// 각 대회에 대해 <li> 생성
	rowData.forEach(tournament => {
		const li = document.createElement('li');
		li.innerHTML =
		`
		<a href="#">${tournament.Name}</a>
		`;
		ul.appendChild(li);
	});

	// 생성된 테이블을 .matchList에 추가
	const matchList = document.querySelector('.match-list');
	matchList.appendChild(ul);
}
    
    
  
// 함수 실행
createTournamentsList();