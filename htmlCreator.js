window.onload = () => {
  var HTMLDataStore = {
    0: {
      col1: {
        imgSrc: "images/image-daniel.jpg",
        heading1: "Daniel Clifford",
        heading2: "Verified Graduate",
      },
      col2:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      col3:
        "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
    },
    1: {
      col1: {
        imgSrc: "images/image-jonathan.jpg",
        heading1: "Jonathan Walters",
        heading2: "Verified Graduate",
      },
      col2: "The team was very supportive and kept me motivated",
      col3:
        "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
    },
    2: {
      col1: {
        imgSrc: "images/image-jeanette.jpg",
        heading1: "Jeanette Harmon",
        heading2: "Verified Graduate",
      },
      col2: "An overall wonderful and rewarding experience",
      col3:
        "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
    },
    3: {
      col1: {
        imgSrc: "images/image-patrick.jpg",
        heading1: "Patrick Abrams",
        heading2: "Verified Graduate",
      },
      col2:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      col3:
        "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
    },
    4: {
      col1: {
        imgSrc: "images/image-kira.jpg",
        heading1: "Kira Whittle",
        heading2: "Verified Graduate",
      },
      col2: "Such a life-changing experience. Highly recommended!",
      col3:
        "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
    },
  };
  var container= document.querySelector(".container");
  for (let i in HTMLDataStore) {
    console.log(i);
    container.innerHTML += `
      <div class="item${i}">
            <div class="item-container">
                <div class="col1">
                    <div class="left-side">
                        <img src="${HTMLDataStore[i]["col1"]["imgSrc"]}" alt="${HTMLDataStore[i]["heading1"]}"/>
                    </div>
                    <div class="right-side">
                        <h2>${HTMLDataStore[i]["col1"]["heading1"]}</h2>
                        <h3>${HTMLDataStore[i]["col1"]["heading2"]}</h3>
                    </div>
                </div>
                <p class="col2">${HTMLDataStore[i]["col2"]}</p>
                <p class="col3">${HTMLDataStore[i]["col3"]}</p>
            </div>
        </div>
      `;
  }
  document.body.innerHTML += `<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div>`;
};
