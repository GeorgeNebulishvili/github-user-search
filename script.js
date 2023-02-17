
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const title = document.querySelector(".title");
const themeTextDark = document.querySelector(".theme-text-dark");
const themeTextLight = document.querySelector(".theme-text-light");
const userinfo = document.querySelector(".user-info");
const searchinput = document.querySelector("#user");
const searchform = document.querySelector (".form");
const button = document.querySelector(".btn");
const userplcholder = document.querySelector("#user::placeholder");

const octocat   = {
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    bio: null,
    blog: "https://github.blog",
    company: "@github",
    created_at: "2011-01-25T18:44:36Z",
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
    location: "San Francisco",
    login: "octocat",
    name: "The Octocat",
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
}


const fliptheme = (theme) => {
    if (theme === "dark")  { 
        moon.style.display = "none";
        sun.style.display = "block";
        themeTextLight.style.display = "block";
        themeTextDark.style.display ="none"
        userinfo.style.backgroundColor = "#1E2A47";
        searchform.style.backgroundColor = "#1E2A47";
        document.body.style.backgroundColor = "#141d2f";
        
        } else {

        }
        title.classList.toggle("dark");
        themeTextDark.classList.toggle("dark");
        userinfo.classList.toggle ("dark");
        searchinput.classList.toggle  ("dark");
        searchform.classList.toggle ("dark");
        
    if (theme === "light")  {
        moon.style.display = "block";
        sun.style.display = "none";
        themeTextDark.style.display = "block";
        themeTextLight.style.display = "none"
        userinfo.style.backgroundColor = "white";
        searchform.style.backgroundColor = "white";
        document.body.style.backgroundColor = "#ffffff";
        } else {

        }
        title.classList.toggle("light");
        themeTextDark.classList.toggle("light");
        userinfo.classList.toggle ("light");
    }

moon.addEventListener("click", () => fliptheme("dark"));
sun.addEventListener("click", () => fliptheme("light"));


// searchInput.addEventListener("input",(e) => {
//     console.log (e.target.value);
//  });

button.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
     const response = await axios.get("https://api.github.com/users/" + searchinput.value
     );
     const user = response.data;
     searchinput.value=""; 
     console.log(user);
    } catch (error) {
        console.log (error);
    }
    
});

