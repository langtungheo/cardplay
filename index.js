document.addEventListener('DOMContentLoaded', ()=>{
    const data = [
        {img: './img/2_of_clubs.png', score : 2},
        {img: './img/2_of_diamonds.png', score : 2},
        {img: './img/2_of_hearts.png', score : 2},
        {img: './img/2_of_spades.png', score : 2},
        {img: './img/3_of_clubs.png', score : 3},
        {img: './img/3_of_diamonds.png', score : 3},
        {img: './img/3_of_hearts.png', score : 3},
        {img: './img/3_of_spades.png', score : 3},
        {img: './img/4_of_clubs.png', score : 4},
        {img: './img/4_of_diamonds.png', score : 4},
        {img: './img/4_of_hearts.png', score : 4},
        {img: './img/4_of_spades.png', score : 4},
        {img: './img/5_of_clubs.png', score : 5},
        {img: './img/5_of_diamonds.png', score : 5},
        {img: './img/5_of_hearts.png', score : 5},
        {img: './img/5_of_spades.png', score : 5},
        {img: './img/6_of_clubs.png', score : 6},
        {img: './img/6_of_diamonds.png', score : 6},
        {img: './img/6_of_hearts.png', score : 6},
        {img: './img/6_of_spades.png', score : 6},
        {img: './img/7_of_clubs.png', score : 7},
        {img: './img/7_of_diamonds.png', score : 7},
        {img: './img/7_of_hearts.png', score : 7},
        {img: './img/7_of_spades.png', score : 7},
        {img: './img/8_of_clubs.png', score : 8},
        {img: './img/8_of_diamonds.png', score : 8},
        {img: './img/8_of_hearts.png', score : 8},
        {img: './img/8_of_spades.png', score : 8},
        {img: './img/9_of_clubs.png', score : 9},
        {img: './img/9_of_diamonds.png', score : 9},
        {img: './img/9_of_hearts.png', score : 9},
        {img: './img/9_of_spades.png', score : 9},
        {img: './img/10_of_clubs.png', score : 10},
        {img: './img/10_of_diamonds.png', score : 10},
        {img: './img/10_of_hearts.png', score : 10},
        {img: './img/10_of_spades.png', score : 10},
        {img: './img/ace_of_clubs.png', score : 1},
        {img: './img/ace_of_diamonds.png', score : 1},
        {img: './img/ace_of_hearts.png', score : 1},
        {img: './img/ace_of_spades.png', score : 1},
        {img: './img/jack_of_clubs.png', score : 11},
        {img: './img/jack_of_diamonds.png', score : 11},
        {img: './img/jack_of_hearts.png', score : 11},
        {img: './img/jack_of_spades.png', score : 11},
        {img: './img/queen_of_clubs.png', score : 12},
        {img: './img/queen_of_diamonds.png', score : 12},
        {img: './img/queen_of_hearts.png', score : 12},
        {img: './img/queen_of_spades.png', score : 12},
        {img: './img/king_of_clubs.png', score : 13},
        {img: './img/king_of_diamonds.png', score : 13},
        {img: './img/king_of_hearts.png', score : 13},
        {img: './img/king_of_spades.png', score : 13},
    ]
    
    function randomNumbers(min, max){
        const number_1 = Math.floor(Math.random()*(max-min + 1))
        const number_2 = Math.floor(Math.random()*(max-min + 1))
        const number_3 = Math.floor(Math.random()*(max-min + 1))
        if(number_1 === number_2 || number_2 === number_3 || number_3 === number_1){
            return randomNumbers(min, max);
        }
        else{
            return [number_1, number_2, number_3]
            
        }
    }
    const card = document.querySelectorAll('img')
    const score = document.querySelector('.score')
    const play = document.querySelector('.play')
    play.onclick = ()=>{
        const index = randomNumbers(0,52);
        const totalScore = []
        Array.from(card).map((item, id)=>{
            totalScore.push(data[index[id]].score)
            return item.attributes.src.nodeValue = data[index[id]].img
        })
        const playerScore = totalScore.reduce((total, item)=>{return total+=item},0)%10
        score.innerHTML = playerScore
    }
})