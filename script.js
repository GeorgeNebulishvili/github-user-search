const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const title = document.querySelector(".title");
const themeTextDark = document.querySelector(".theme-text-dark");
const themeTextLight = document.querySelector(".theme-text-light");
const userinfo = document.querySelector(".user-info");
const searchinput = document.querySelector("#user");
const card = document.querySelector (".card");
const button = document.querySelector(".btn");
const userplcholder = document.querySelector("#user::placeholder");
const avatarMobile  = document.querySelector(".avatar-mobile");
const avatarDesktop = document.querySelector(".avatar-desktop");
const nameuser = document.querySelector(".name");
const login = document.querySelector (".login");
const joinDate = document.querySelector (".join-date");
const bio = document.querySelector (".bio");
const repos = document.querySelector ("#repos");
const followers = document.querySelector ("#followers");
const following = document.querySelector ("#following");
const city = document.querySelector ("#city");
const blog = document.querySelector ("#blog");
const twitter = document.querySelector ("#twitter");
const company = document.querySelector ("#company");
const errorelement = document.querySelector (".error");
const stats = document.querySelector (".stats");

// კონკრეტული იუზერის მონაცემები
const userName   = {
    avatar_url: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
    bio: null,
    blog: "",
    company: "",
    created_at: "",
    email: null,
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    followers: 8372,
    followers_url: "https://api.github.com/users/octocat/followers",
    following: 9,
    following_url: "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    gravatar_id: "",
    hireable: null,
    html_url: "https://github.com/octocat",
    id: 583231,
    location: "",
    login: "",
    name: "",
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    public_gists: 8,
    public_repos: 8,
    received_events_url: "https://api.github.com/users/octocat/received_events",
    repos_url: "https://api.github.com/users/octocat/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    twitter_username: null,
    type: "User",
    updated_at: "2023-01-22T12:13:51Z",
    url: "https://api.github.com/users/octocat",
    };

// ერორის ტექსტის გასუფთავება ელემენტის ცვლილებაზე-წაშლა(input-არის ივენთი)
searchinput.addEventListener("input", () => {
    errorelement.textContent = "";
});

// თარიღის ტრანსფორმაცია სასურველ ფორმატში
const dateTransfomer = (date) =>   {
    const dateobj = new Date(date);
    const dateString = dateobj.toDateString();
    const [weekday, month, day, year] = dateString.split(" ");
    return `${day} ${month} ${year}`;
    // console.log(weekday, month, day, year);
}
// იუზერის ინფორმაციის შევსება
const displayInfo = (user) => {
    avatarMobile.src = user.avatar_url;
    avatarDesktop.src = user.avatar_url;
    if  (nameuser.textContent ) {
        nameuser.textContent = user.name;
    } else {
        nameuser.textContent = "userName"
    }
    if (login.textContent) {
        login.textContent = "@" + user.login;
    } else  {
        login.textContent = "login"
    }
    const date = dateTransfomer(user.created_at);
    if (joinDate.textContent) {
        joinDate.textContent = " Joined " + date;
    } else {
        joinDate.textContent = "JoinDate ";
    }
    bio.textContent = 
        user.bio || 
        "User's bio"
    if(repos.textContent) {
        repos.textContent = user.public_repos;
    } else  {
        repos.textContent = "n/a";
    }
    if(followers.textContent) {
        followers.textContent = user.followers;
    }  else     {
        followers.textContent = "n/a";
    }
    if(following.textContent)  {
        following.textContent = user.following;
    }  else {
        following.textContent = "n/a";
    }
    if(user.location)   {
        city.textContent = user.location;
    } else {
        city.textContent = "Not Available";
        city.parentElement.style.opacity = 0.5;
    }
    if(user.twitter_username)   {
        twitter.textContent = user.twitter_username;
    } else {
        twitter.textContent = "Not Available";
        twitter.parentElement.style.opacity = 0.5;
    }
    if(user.blog)   {
        blog.textContent = user.blog;
        blog.href = user.blog;
    } else {
        blog.textContent = "Not Available";
        blog.parentElement.style.opacity = 0.5;
        blog.href = "#";
    }
    if(user.company)   {
        company.textContent = user.company;
    } else {
        company.textContent = "Not Available";
        company.parentElement.style.opacity = 0.5;
    }

    };

displayInfo (userName);

// თემის შეცვლა (dark; light)
const fliptheme = (theme) => {
    if (theme === "dark")  { 
        moon.style.display = "none";
        sun.style.display = "block";
        themeTextLight.style.display = "block";
        themeTextDark.style.display ="none"
        userinfo.style.backgroundColor = "#1E2A47";
        card.style.backgroundColor = "#1E2A47";
        document.body.style.backgroundColor = "#141d2f";
        login.style.color = "var(--electric)"; 
        
        } else {
            moon.style.display = "block";
            sun.style.display = "none";
            themeTextDark.style.display = "block";
            themeTextLight.style.display = "none"
            userinfo.style.backgroundColor = "white";
            card.style.backgroundColor = "white";
            document.body.style.backgroundColor = "#ffffff";
        }
        title.classList.toggle("dark");
        themeTextDark.classList.toggle("dark");
        userinfo.classList.toggle ("dark");
        searchinput.classList.toggle  ("dark");
        card.classList.toggle ("dark");
        Array.from(card).forEach(card =>card.classList.toggle("dark"));
        card.style.color = "var(--white)";
        blog.classList.toggle("dark");
        stats.classList.toggle("dark");

        
    // if (theme === "light")  {
    //     moon.style.display = "block";
    //     sun.style.display = "none";
    //     themeTextDark.style.display = "block";
    //     themeTextLight.style.display = "none"
    //     userinfo.style.backgroundColor = "white";
    //     card.style.backgroundColor = "white";
    //     document.body.style.backgroundColor = "#ffffff";
    //     } else {

    //     }
    //     title.classList.toggle("light");
    //     themeTextDark.classList.toggle("light");
    //     userinfo.classList.toggle ("light");
    }
// კლიკზე შეუცვალოს კლასი
moon.addEventListener("click", () => fliptheme("dark"));
sun.addEventListener("click", () => fliptheme("light"));


// searchInput.addEventListener("input",(e) => {
//     console.log (e.target.value);
//  });

// იუზერის ძებნის ივენთი
button.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
     const response = await axios.get("https://api.github.com/users/" + searchinput.value
     );
     const user = response.data;
     displayInfo(user);
     searchinput.value=""; 
    } catch (error) {
        console.log (error);
        errorelement.textContent = "No result"
    }
    
});