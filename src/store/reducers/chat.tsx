import * as actionTypes from '../actions/actionTypes';

const initState = {
    userStack: {},
    userPStack: {},
    chats: [
        {
            chat: {
                messages: [
                    {
                        _id: null,
                        from: { username: null, _id: null },
                        to: { username: null, _id: null },
                        message: '',
                        unread: true,
                    },
                ],
            },
            room: '',
            msgCount: 0,
        },
    ],
    rooms: [],
    socket: null,
    error: null,
};

const chatReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SOCKET_MOUNT:
            return {
                ...state,
                socket: action.socket,
            };
        case actionTypes.SOCKET_UNMOUNT:
            return initState;
        case actionTypes.CHAT_USER_STACK:
            return {
                ...state,
                userStack: action.userStack,
            };
        case actionTypes.CHAT_USER_PSTACK:
            return {
                ...state,
                userPStack: action.userPStack,
            };
        case actionTypes.CHAT_ROOM_SET:
            return {
                ...state,
                rooms: action.id,
            };
        case actionTypes.SOCKET_ERR:
            return {
                ...state,
                error: action.error,
            };
        case actionTypes.CHAT_USER_CHATS_INIT:
            return {
                ...state,
                chats: state.chats.concat(action.chats),
                error: null,
            };
        case actionTypes.CHAT_USER_CHATS:
            return {
                ...state,
                chats: state.chats.map((val) => {
                    return val.room === action.room
                        ? {
                              ...val,
                              chat: {
                                  ...val.chat,
                                  messages: val.chat.messages.concat(
                                      action.messages
                                  ),
                              },
                              msgCount: action.msgCount,
                          }
                        : val;
                }),
                error: null,
            };
        case actionTypes.CHAT_ROOM_MESSAGE:
            return {
                ...state,
                chats: state.chats.map((val) => {
                    return val.room === action.room
                        ? {
                              ...val,
                              chat: {
                                  ...val.chat,
                                  messages: [
                                      action.message,
                                      ...val.chat.messages,
                                  ],
                              },
                              msgCount: val.msgCount + 1,
                          }
                        : val;
                }),
                error: null,
            };
        case actionTypes.CHAT_ROOM_READ:
            return {
                ...state,
                error: null,
                chats: state.chats.map((val) => {
                    return val.room === action.chatId
                        ? {
                              ...val,
                              chat: {
                                  ...val.chat,
                                  messages: val.chat.messages.map((mval) => {
                                      return mval.to.username ===
                                          action.username && mval.unread
                                          ? { ...mval, unread: false }
                                          : mval;
                                  }),
                              },
                          }
                        : val;
                }),
            };
        case actionTypes.CHAT_UPDATE_MSG:
            return {
                ...state,
                error: null,
                chats: state.chats.map((val) => {
                    return val.room === action.chatId
                        ? {
                              ...val,
                              chat: {
                                  ...val.chat,
                                  messages: val.chat.messages.map((mval) => {
                                      // eslint-disable-next-line no-underscore-dangle
                                      return mval._id === action.messageId
                                          ? action.message
                                          : mval;
                                  }),
                              },
                          }
                        : val;
                }),
            };
        default:
            return state;
    }
};

export default chatReducer;
