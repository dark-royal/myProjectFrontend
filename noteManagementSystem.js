const {axios} = required("axios");
const forms = document.getElementById('form');

forms.addEventListener("submit", e => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementsByClassName(".username").value
    const username = document.getElementsByClassName(".username").value

    const obj = {
        email: email,
        username: username,
        password: password
    }

    const divTag = document.createElement("div")
    const pTag = document.createElement("p")
    divTag.appendChild(pTag);

    async function postJSON(obj) {
        try {
            const response = await fetch("http://localhost:8080/api/User/signup", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
            });

            if(!response.ok){
                const errorData = await response.json();
                const yoo = JSON.parse(obj)
                throw new Error(errorData.message);
            }

            const result = await response.json();


            console.log("Success:", result);
            pTag.textContent = result.message;
        } catch (error) {
            console.log("Error:", error);

        }
    }
    


    forms.appendChild(divTag)

})