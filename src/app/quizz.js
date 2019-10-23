import $ from 'jquery';

const pics = {
  pic: [
    'Moyeu.png',
    'Pedalier.png',
    'Plateau.png',
    'Amortisseur.svg',
    'Roue.svg',
    'Tige de selle.png',
  ],
  picName: [
    'Moyeu',
    'Pédalier',
    'Plateau',
    'Amortisseur',
    'Roue',
    'Tige de selle',
  ],
};

// const index = 0;

let counterQuestions = 0;

let correctOption;
const randomElem = (tab) => tab[Math.floor(Math.random() * tab.length)];

const shuffle = (tab) => {
  let index2 = tab.indexOf(randomElem(tab));
  while (index2 === tab[0]) {
    index2 = randomElem(tab);
  }
  // eslint-disable-next-line no-param-reassign
  [tab[0], tab[index2]] = [tab[index2], tab[0]];
};

const showImage = document.getElementById('bikeImg');
// const btnChoice = document.getElementById('check');

const initialPhotos = [...pics.pic];
let pointsCounter = 0;

const answer = () => {
  $('input[type=radio]').prop('checked', false);
  // if(pics.pic.length>0){
  const question = randomElem(pics.pic);

  const transferIndex = initialPhotos.indexOf(question);

  $(showImage).empty();
  $(`<img class='chosen-immage' src='assets/images/${question}'/>`).appendTo(
    showImage,
  );

  correctOption = pics.picName[transferIndex];

  const options = [];
  options.push(correctOption);

  while (options.length < 3) {
    // $(`#choice${options.length}`).value(options[options.length-1]);

    const newElemet = randomElem(pics.picName);
    if (!options.includes(newElemet)) {
      options.push(newElemet);
    }
    shuffle(options);
  }
  for (let i = 0; i < options.length; i++) {
    const a = document.getElementById(`choice${i + 1}`);
    a.value = options[i];

    // remove old label here:
    $(a)
      .parent()
      .find('label')
      .remove();
    // create new label:
    const el = $(`<label>${options[i]}</label>`);

    $(a).after(el);
  }
  const removedIndex = pics.pic.indexOf(question);
  pics.pic.splice(removedIndex, 1);
// }else{
//   let question=part2.questions[index];
// }
};
answer();
let widthBar = 0;

const checkAnswer = () => {
  const a = $(
    "input[type='radio'][name=choice]:checked",
    '#monQuestionnaire',
  ).val();

  if (a === correctOption) {
    ++pointsCounter;

    widthBar += 17;

    console.log(`widthBar :${widthBar}`);

    $('#myprogressBar').css('width', `${widthBar}%`);
    console.log(`winner, you have ${pointsCounter}`);
  } else {
    console.log(`Loser, you have ${pointsCounter} points`);
  }
  ++counterQuestions;
};

const feedback = () => {
  if (counterQuestions === 6) {
    $('#bikeImg').empty().append('<p class="choisis">Choisis ton badge</p><div class="rowB"><img src="../assets/images/Queen.svg" alt="queen" class="colB"><img src="../assets/images/King.svg" class="colB" alt="king"></div>');
    $('#monQuestionnaire').empty();
    $('#Progress_Status').fadeOut(2000);
  }
};

$('#check').on('click', () => {
  checkAnswer();
  answer();
  feedback();
});

$('img').on('click', () => {
  $(this).css('opacity', '0.5');
});
