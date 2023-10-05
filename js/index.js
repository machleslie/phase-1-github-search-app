document.addEventListener('DOMContentLoaded', (event) => {
    const userlist = document.querySelector("#user-list")
    const submit = document.querySelector('#submit');
    const search = document.querySelector('#search');
    const nameInput = search.value;
    
    const userApiEndpoint =`https://api.github.com/search/users?q=${search}`
    function getData(){
        fetch(userApiEndpoint)
                .then(response => response.json())
                .then(data => console.log(data) )
                .catch(err=> console.log(`Error`,err))
    }
    
    const  searchName = () => {
        const send = submit.addEventListener('click',()=>{
        const getUser =  getData();         
        let dataDisplay = getUser.filter((event)=>{
            if (nameInput===""){return event}
            else if(event.name.tolowercase().includes(nameInput.tolowercase()))
            {return event}
        }).map((object)=>{
            const {name, username ,avator } =object;
            return`
            <div class =container>
            <p> Name: ${name}</p><br>
            <p> username:${username}</p><br>
            <img scr ="${avator}><br>
            <hr>
            </div>`
        }).join('');
            userlist.appendChild(dataDisplay);
            

        })
    }
    searchName();
})