const reviews = [
  {
    id: 1,
    name: 'Johnson Malobo',
    job: 'UI/UX',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus autem cumque beatae consectetur maiores ut vel esse, aut obcaecati deserunt repudiandae velit eligendi officia culpa. In sint quisquam placeat excepturi pariatur. Quidem odit nihil illum iste quisquam hic inventore voluptas velit, alias optio! Possimus similique tenetur ut repellat doloremque.',
  },
  {
    id: 1,
    name: 'Nelson Madela',
    job: 'software engineering',
    img: 'https://randomuser.me/api/portraits/women/36.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus autem cumque beatae consectetur maiores ut vel esse, aut obcaecati deserunt repudiandae velit eligendi officia culpa. In sint quisquam placeat excepturi pariatur. Quidem odit nihil illum iste quisquam hic inventore voluptas velit, alias optio! Possimus similique tenetur ut repellat doloremque.',
  },
  {
    id: 1,
    name: 'Olusegun Obasanjo',
    job: 'Frontend Developer',
    img: 'https://randomuser.me/api/portraits/women/63.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus autem cumque beatae consectetur maiores ut vel esse, aut obcaecati deserunt repudiandae velit eligendi officia culpa. In sint quisquam placeat excepturi pariatur. Quidem odit nihil illum iste quisquam hic inventore voluptas velit, alias optio! Possimus similique tenetur ut repellat doloremque.',
  },
  {
    id: 1,
    name: 'Tambo Nbeki',
    job: 'Fullstack developer',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus autem cumque beatae consectetur maiores ut vel esse, aut obcaecati deserunt repudiandae velit eligendi officia culpa. In sint quisquam placeat excepturi pariatur. Quidem odit nihil illum iste quisquam hic inventore voluptas velit, alias optio! Possimus similique tenetur ut repellat doloremque.',
  },
  {
    id: 1,
    name: 'Deji molati',
    job: 'Java Developer',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus autem cumque beatae consectetur maiores ut vel esse, aut obcaecati deserunt repudiandae velit eligendi officia culpa. In sint quisquam placeat excepturi pariatur. Quidem odit nihil illum iste quisquam hic inventore voluptas velit, alias optio! Possimus similique tenetur ut repellat doloremque.',
  },
];

const img = document.querySelector('.review-photo');
const author = document.querySelector('.reviewer-name');
const job = document.querySelector('.reviewer-job');
const info = document.querySelector('.review-text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const btn = document.querySelector('.btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

btn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson(currentItem);
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
