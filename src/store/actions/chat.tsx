import * as actionTypes from './actionTypes';

export const setUserStack = (userStack) => ({
    type: actionTypes.CHAT_USER_STACK,
    userStack,
});

export const setUserPStack = (userPStack) => ({
    type: actionTypes.CHAT_USER_PSTACK,
    userPStack,
});

export const setChatsData = (chats) => ({
    type: actionTypes.CHAT_USER_CHATS_INIT,
    chats,
});

export const setOldChatsData = (chats) => ({
    type: actionTypes.CHAT_USER_CHATS,
    ...chats,
});

export const setCurrentRoom = (id) => ({
    type: actionTypes.CHAT_ROOM_SET,
    id,
});

export const roomMsg = (data) => ({
    type: actionTypes.CHAT_ROOM_MESSAGE,
    ...data,
});

export const readRoom = (chatId: string, username: string) => ({
    type: actionTypes.CHAT_ROOM_READ,
    chatId,
    username,
});

export const pokeUser = (fn) => {
    fn();
};

export const typing = (socket: SocketIOClient.Socket, room: string) => {
    socket.emit('typing', room);
};

export const readMsg = (
    socket: SocketIOClient.Socket,
    chatId: string,
    user: { username: string; _id: string }
) => (dispatch) => {
    socket.emit('readMsg', { chatId, user });
    dispatch(readRoom(chatId, user.username));
};

export const socketMount = (socket: SocketIOClient.Socket) => ({
    type: actionTypes.SOCKET_MOUNT,
    socket,
});

export const updateMsg = (data) => ({
    type: actionTypes.CHAT_UPDATE_MSG,
    ...data,
});

export const oldChats = (
    socket: SocketIOClient.Socket,
    username: string,
    chatId: string,
    msgCount: number
) => {
    socket.emit('oldChats', { username, chatId, room: chatId, msgCount });
};

export const newRoom = (
    socket: SocketIOClient.Socket,
    from: { username: string; _id: string },
    to: { username: string; _id: string },
    item: { title: string; _id: string },
    anynomous: boolean,
    msgCount: number
) => {
    socket.emit('setRoom', { from, to, item, msgCount, anynomous });
};

export const revealIden = (
    socket: SocketIOClient.Socket,
    from: { username: string; _id: string },
    to: { username: string; _id: string },
    chatId: string
) => {
    socket.emit('revealIdentity', { from, to, chatId });
};

export const oldInitRoom = (
    socket: SocketIOClient.Socket,
    from: { username: string; _id: string },
    to: { username: string; _id: string },
    item: { title: string; _id: string },
    msgCount: number,
    username: string
) => {
    socket.emit('setRoom', { from, to, item, msgCount, username });
};

export const chatMsg = (
    socket: SocketIOClient.Socket,
    msgFrom: { username: string; _id: string },
    msgTo: { username: string; _id: string },
    msg: string,
    roomId: string
) => {
    socket.emit('chatMsg', { msgFrom, msgTo, msg, roomId });
};

export const socketUnmount = () => ({
    type: actionTypes.SOCKET_UNMOUNT,
});

export const socketError = (err) => ({
    type: actionTypes.SOCKET_ERR,
    error: err,
});

export const mountChat = (username, id, socket: SocketIOClient.Socket) => (
    dispatch
) => {
    let copystack: Record<string, unknown>;
    socket.on('connect', () => {
        socket.emit('setUserData', username);
        socket.emit('getAllRoomId', { username, _id: id });
    });
    socket.on('onlineStack', (sta: Record<string, unknown>) => {
        dispatch(setUserStack(sta));
        // eslint-disable-next-line no-restricted-syntax
        for (const i in copystack) {
            if (copystack[i] !== sta[i]) {
                copystack[i] = sta[i];
            }
        }
        dispatch(setUserPStack(copystack));
    });
    socket.on('onlinePStack', (sta: Record<string, unknown>) => {
        dispatch(setUserPStack(sta));
        copystack = sta;
    });
    // socket.on('recChatData', (chats) => {
    //     dispatch(setChatsData(chats));
    // });
    socket.on('oldIniChats', (data) => {
        dispatch(setChatsData(data));
    });
    socket.on('oldChats', (data) => {
        dispatch(setOldChatsData(data));
    });
    socket.on('setRoom', (data) => {
        dispatch(setCurrentRoom(data));
    });
    socket.on('typing', (data) => {
        dispatch(data);
    });
    socket.on('newChat', (data) => {
        dispatch(setChatsData(data));
        // eslint-disable-next-line no-underscore-dangle
        pokeUser(data.result._id);
    });
    socket.on('chatMsg', (data) => {
        dispatch(roomMsg(data));
    });
    socket.on('re-renderStack', () => {
        socket.emit('re-renderStack', username);
    });
    socket.on('error', (data) => {
        dispatch(socketError(data));
    });
    socket.on('updateMsg', (data) => {
        dispatch(updateMsg(data));
    });
};

export default mountChat;
