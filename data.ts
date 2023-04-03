type PostDataType = {
  id: number
  title: string
  resume: string
  body: string
  imageUrl: string
}
type commentsDataType= {
  id: number
  idPost: number
  email: string
  body: string
  imageU: string
}
const postsData: PostDataType[] = [
  {
    id: 1,
    title: 'How to become a Emo Cat?',
    resume: 'This is a simple guide about how to dress and act like a emo cat. Even with the severals ways to do that, ill try to give you a start!! :3',
    body: 'So, cast a stone if you never tried to find yourself in a style and got frustrated :( <br> Well, like many of you, i did. But its ok!! I didnt give up, so you wont to!! <br> Im here because i find myself in Emo!! thats right, and maybe i can help someone else to feel confortable in this fur :3 <br> Ok, lets start! Firts of all, you need to feel confortable whith some dark fur. If you dont like dark stuff, problably its not gonna fit for you, but feel free to try. <br> Next, ill give you a list of items that you NEED to have in your closet. Will match with everything. <ul class="list-post"> <li>spiked collar</li> <li>leather vest</li> <li>black mackup (if you feel confortable)</li> </ul> In the next post, ill show how to combine this accessories!',
    imageUrl: './img-post1.jpg',
  },
  {
    id: 2,
    title: 'Chat of the week with: Gatarina Meowndonza',
    resume: 'At the height of success for ten years, Colombian singer Gatarina Meowndonza opens up and reveals the secret to maintaining longevity across generations.',
    body: '',
    imageUrl: './img-post2.jpg',
  },
  {
    id: 3,
    title: 'Gang threatens the city of Los Angeles and worries residents',
    resume: 'Cute on the outside, naughty on the inside: A gang of malevolent cats has created panic in the Los Angeles cat community.',
    body: '',
    imageUrl: './img-post3.jpg',
  },
]
const commentsData: commentsDataType[] = [
  {
    id: 1,
        idPost: 1,
        email: 'Kitty@catmail.com',
        body: 'meooww!! i loved the post, really helped me!! 😻',
        imageU: 'comment1-post1.jpg',
  },
  {
    id: 2,
        idPost: 1,
        email: 'Meowina@catmail.com',
        body: 'I tried once, didnt work for me. But nice post, i know its going to help someone :3',
        imageU: 'comment1-post2.jpg',
  },
  {
    id: 3,
        idPost: 2,
        email: 'number1fanGatarina@catmail.com',
        body: 'she never disappoints!! I love her to much, meow number 1 artist!1 😻😻😻',
        imageU: 'comment2-post1.jpg',
  },
  {
    id: 4,
        idPost: 2,
        email: 'realcat@catmail.com',
        body: ' I dont like her. to forced. i cant take hers shrill meows anymore.',
        imageU: 'comment2-post2.jpg',
  },
  {
    id: 5,
        idPost: 2,
        email: 'bobthecat@catmail.com',
        body: 'shut up! u dont understand the concept.',
        imageU: 'comment2-post3.jpg',
  },
  {
    id: 6,
        idPost: 3,
        email: 'everythingwaswrong@catmail.com',
        body: 'This bastards are ruining our image!',
        imageU: 'comment13-post1.jpg',
  },
]

const postCard = ({ id, imageUrl, title, resume}: PostDataType) => `
<div class='post-list'>
<button type='button' class='post-btn' id='${id}'>
<img src='${imageUrl}' alt='${title}' class="article-image rainbow-box"/>
  <div>
  <h2 class="tittle-post">${title}</h2>
  <article class="article">${resume}</article>
  </div>
</button>
</div>`
document.body.style.background = 'transparent'
;

const commentCard = ({ id, imageU, email, body}: commentsDataType) =>
` <h3>Comments</h3>
  <div class="individual-comment" id=${id}>
      <div class="user">
          <img src="${imageU}" alt="" class="perfil-image">
          <h4 class="email">${email}</h4>
      </div>
      <blockquote class="body">
      ${body}
      </blockquote>
  </div>`

const container = document.getElementById('main')!

const showPost = (IdPost: number) => {
  const postData = postsData.find(item => item.id === IdPost)
 
  let html = ''

  if (postData) {
    html += postCard(postData)
  }

  const filteredCommentsData = commentsData.filter(item => item.idPost === IdPost)

  console.log('filteredCommentsData', filteredCommentsData.length)

  for (const commentData of filteredCommentsData) {  
    html += commentCard(commentData)
  }

  container.innerHTML = html  
}


let postsDataToHTML = ''

for (const postData of postsData) {  
  postsDataToHTML += postCard(postData)
}

container.innerHTML = postsDataToHTML

const postButtons = document.querySelectorAll('.post-btn');
postButtons.forEach((button) => {
  button.addEventListener('click', function () {
    showPost(+this.id)
    console.log(this.id)
  });
});

