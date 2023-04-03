var postsData = [
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
];
var commentsData = [
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
];
var postCard = function (_a) {
    var id = _a.id, imageUrl = _a.imageUrl, title = _a.title, resume = _a.resume;
    return "\n<div class='post-list'>\n<button type='button' class='post-btn' id='".concat(id, "'>\n<img src='").concat(imageUrl, "' alt='").concat(title, "' class=\"article-image rainbow-box\"/>\n  <div>\n  <h2 class=\"tittle-post\">").concat(title, "</h2>\n  <article class=\"article\">").concat(resume, "</article>\n  </div>\n</button>\n</div>");
};
document.body.style.background = 'transparent';
var commentCard = function (_a) {
    var id = _a.id, imageU = _a.imageU, email = _a.email, body = _a.body;
    return " <h3>Comments</h3>\n  <div class=\"individual-comment\" id=".concat(id, ">\n      <div class=\"user\">\n          <img src=\"").concat(imageU, "\" alt=\"\" class=\"perfil-image\">\n          <h4 class=\"email\">").concat(email, "</h4>\n      </div>\n      <blockquote class=\"body\">\n      ").concat(body, "\n      </blockquote>\n  </div>");
};
var container = document.getElementById('main');
var showPost = function (IdPost) {
    var postData = postsData.find(function (item) { return item.id === IdPost; });
    var html = '';
    if (postData) {
        html += postCard(postData);
    }
    var filteredCommentsData = commentsData.filter(function (item) { return item.idPost === IdPost; });
    console.log('filteredCommentsData', filteredCommentsData.length);
    for (var _i = 0, filteredCommentsData_1 = filteredCommentsData; _i < filteredCommentsData_1.length; _i++) {
        var commentData = filteredCommentsData_1[_i];
        html += commentCard(commentData);
    }
    container.innerHTML = html;
};
var postsDataToHTML = '';
for (var _i = 0, postsData_1 = postsData; _i < postsData_1.length; _i++) {
    var postData = postsData_1[_i];
    postsDataToHTML += postCard(postData);
}
container.innerHTML = postsDataToHTML;
var postButtons = document.querySelectorAll('.post-btn');
postButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        showPost(+this.id);
        console.log(this.id);
    });
});
