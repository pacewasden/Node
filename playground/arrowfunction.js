const event = {
    name:'My Birthday Party',
    guestList: ['Pace', 'Shana', 'Renny'],
    printGuestList(){
        console.log('Guest List for '+ this.name)
        this.guestList.forEach((guest) =>{
            console.log(guest +' is attending '+ this.name)
        })
    }

}

event.printGuestList()