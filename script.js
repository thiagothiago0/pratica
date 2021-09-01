const containerRoot = document.querySelector("#root");
 const input = document.querySelector(".input-text"); 
 // const containerForm = document.querySelector("#container-form")




async function getUserData(){

try{
		const data = await fetch("https://api.github.com/users/yagovaluchedevs")
		const response = await data.json();
	console.log(response);

	const image = document.createElement("img");
		image.src = response.avatar_url;
		image.style.width = "250px";
		image.style.borderRadius = "100%";

		containerRoot.appendChild(image);

	const bioGit = document.createElement("p");
		bioGit.innerText = response.bio;
		bioGit.style.fontSize = "20px";
		containerRoot.appendChild(bioGit);

	const locationUser = document.createElement("h2");
		locationUser.innerText = response.location;
		containerRoot.appendChild(locationUser);

	const followersUser = document.createElement("h3");
		followersUser.innerText = `Followers: ${response.followers}`;
		containerRoot.appendChild(followersUser);

	const followingUser = document.createElement("h3");
		followingUser.innerText = `Following: ${response.following}`;
		containerRoot.appendChild(followingUser);


	const link = document.createElement("a");
		link.innerText = "link";

		link.setAttribute("href",`${response.html_url}`);
		link.setAttribute("target","_blank");
		

		containerRoot.appendChild(link);

	}catch(error){
		console.log(`Meu erro: ${error}`);
	}




}
	getUserData(input.value);
