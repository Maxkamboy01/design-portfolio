const cardsArray = [
  {
    img: '<i class="fas fa-camera-retro"></i>',
    text: "photography",
  },
  {
    img: '<i class="fas fa-cogs"></i>',
    text: "design ideas",
  },
  {
    img: '<i class="fas fa-rocket"></i>',
    text: "creative",
  },
  {
    img: '<i class="fab fa-telegram-plane"></i>',
    text: "marketing",
  },
];

var cardVar = "";

for (var i = 0; i < cardsArray.length; i++) {
  var card = cardsArray[i];
  cardVar += `
    <div class="card">
            <div class="icon-box">
    ${card.img}
            </div>
            <p class="text">${card.text}</p>
            </div>`;
}

document.querySelector(".cards-wrapper").innerHTML = cardVar;

const teamInfo = [
  {
    img: '<img src="./assets/images/team-1.jpg" alt="team-member" />',
    fullname: "Jeffrey Brown",
    job: "CREATIVE LEADER",
    div: 'data-aos="zoom-out"',
  },
  {
    img: '<img src="./assets/images/team2.jpg" alt="team-member" />',
    fullname: "Ann Richmond",
    job: "MANAGER",
    div: 'data-aos="zoom-out"',
  },
  {
    img: '<img src="./assets/images/team-3.jpg" alt="team-member" />',
    fullname: "Alex Grinfield",
    job: "PROGRAMMING GURU",
    div: ' data-aos="zoom-out-right"',
  },
  {
    img: '<img src="./assets/images/team-4.jpg" alt="team-member" />',
    fullname: "Roxie Swandon",
    job: "SALES MANAGER",
    div: 'data-aos="zoom-out-left"',
  },
];

var teamVar = "";
var titleVar = "";
for (var t = 0; t < teamInfo.length; t++) {
  var team = teamInfo[t];
  teamVar += `
  <div class="team" ${team.div}>
  
                ${team.img}
                <div class="team-info">
                  <p class="fullname">${team.fullname}</p>
                  <p class="job">${team.job}</p>
                  <p class="text">
                    <i
                      >Sample text. Click to select the text box. Click again or
                      double click to start editing the text</i
                    >
                  </p>
                  <div class="team-contact">
                    <a target=""blank"
                      class="ankor"
                      href="https://www.facebook.com/campaign/landing.php?campaign_id=11554070363&extra_1=s%7Cc%7C477437435741%7Ce%7Cfacebook%7C&placement=&creative=477437435741&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwruSHBhAtEiwA_qCppreMoV2-rDnlCpMWWNGqwYsjCrvhXzhm2jn9zh7Li82LOAZu3fUg3hoCjgkQAvD_BwE"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a target=""blank" class="ankor" href="https://twitter.com/?lang=ru">
                      <i class="fab fa-twitter"></i>
                    </a>
    
                    <a target="blank" class="ankor" href="https://www.instagram.com/?hl=ru"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </div>
                </div>
                </div>
              </div>
    `;
  titleVar = `
    <div class="title-content">
          <p class="title">OUR PERFECT TEAM</p>
          <p class="subtitle">
            Sample text. Click to select the text box. Click again or double
            click to <br /> start editing the text
          </p>
          <button class="call">
            <i class="fas fa-phone-alt"></i>  CALL NOW
          </button>
        </div>`;
}

document.querySelector(".team-member-box").innerHTML = teamVar + titleVar;

var toggles = () => {
  document.querySelector(".nav-icons").classList.toggle("block");
};

var over = (value) => {
  document.getElementById("main-text").innerText = value;
};
