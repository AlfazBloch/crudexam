
const connectedUsers = new Set()
const connectedUsersSocket = {}
const setUpSocket = (io) => {
    io.on("connection",(socket)=>{
        socket.on("username",({username})=>{
            if(!connectedUsers.has(username) && username){
                connectedUsers.add(username)
                connectedUsersSocket[username] = socket.id
                socket.username = username
                console.log(`${username} connected`);
                console.log(connectedUsers);
                
                io.emit("users",{users:[...connectedUsers]})
            }
        })

        socket.on("message",({text,receiver}) => {
            console.log(`Message from ${socket.username} to ${receiver}: ${text}`);
            
            socket.to(connectedUsersSocket[receiver]).emit("message",{text,sender:socket.username})
        })

        socket.on("disconnect",()=>{
            connectedUsers.delete(socket.username)
            delete connectedUsersSocket[socket.username]
            console.log(`${socket.username} disconnected`);

            io.emit("users",{users:[...connectedUsers]})
        })
    })
}   

export default setUpSocket