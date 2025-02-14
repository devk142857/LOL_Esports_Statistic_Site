// 챔피언 데이터 배열 (이미지명, alt, 표시이름)
const championsData = [
    { Name: 'Ahri', alt: 'Ahri', displayName: '아리' },
    { Name: 'Yasuo', alt: 'Yasuo', displayName: '야스오' },
    { Name: 'Zed', alt: 'Zed', displayName: '제드' },
    { Name: 'Jinx', alt: 'Jinx', displayName: '징크스' },
    { Name: 'Thresh', alt: 'Thresh', displayName: '쓰레쉬' },
    { Name: 'LeeSin', alt: 'Lee Sin', displayName: '리 신' },
    { Name: 'Lux', alt: 'Lux', displayName: '럭스' },
    { Name: 'Ezreal', alt: 'Ezreal', displayName: '이즈리얼' },
    { Name: 'Katarina', alt: 'Katarina', displayName: '카타리나' },
    { Name: 'Ashe', alt: 'Ashe', displayName: '애쉬' },
    { Name: 'Ryze', alt: 'Ryze', displayName: '라이즈' },
    { Name: 'Yone', alt: 'Yone', displayName: '요네' },
    { Name: 'Jhin', alt: 'Jhin', displayName: '진' },
    { Name: 'Smolder', alt: 'Smolder', displayName: '스몰더' },
    { Name: 'Karma', alt: 'Karma', displayName: '카르마' },
    { Name: 'DrMundo', alt: 'Mundo', displayName: '문도 박사' },
    { Name: 'Garen', alt: 'Garen', displayName: '가렌' },
    { Name: 'Darius', alt: 'Darius', displayName: '다리우스' },
    { Name: 'Talon', alt: 'Talon', displayName: '탈론' },
    { Name: 'Tryndamere', alt: 'Tryndamere', displayName: '트린다미어' },
    { Name: 'Sion', alt: 'Sion', displayName: '사이온' },
  ];
  
  // 테이블 생성 함수
function createChampionTable() {
    const table = document.createElement('table');
    
    // 데이터를 10개씩 분할하여 행 생성
    for (let i = 0; i < championsData.length; i += 10) {
        const rowData = championsData.slice(i, i + 10);
        const tr = document.createElement('tr');
        
        // 각 챔피언에 대해 td 생성
        rowData.forEach(champion => {
            const td = document.createElement('td');
            td.innerHTML =
            `
            <img src="img/champions/loading/${champion.Name}_0.jpg" alt="${champion.alt}">
            <span class="champion-name"><a href="#">${champion.displayName}</a></span>
            `;
            tr.appendChild(td);
        });
    
        table.appendChild(tr);
    }
    
    // 생성된 테이블을 .champion-list에 추가
    const container = document.querySelector('.champion-list');
    container.appendChild(table);
}
  
// 함수 실행
createChampionTable();