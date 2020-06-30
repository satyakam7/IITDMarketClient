import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { socketMount, socketUnmount } from '../../store/actions/chat';

type mountChatType = (socket: SocketIOClient.Socket) => void;
type unmountChatType = () => void;

interface AppProps {
    mountChat: mountChatType;
    unmountChat: unmountChatType;
}

interface AppState {
    socket: SocketIOClient.Socket;
}

class HC extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);
        const { mountChat } = this.props;
        this.state = { socket: io.connect('http://localhost:5000/chat') };
        const { socket } = this.state;
        mountChat(socket);
    }

    componentWillUnmount() {
        const { socket } = this.state;
        socket.disconnect();
        const { unmountChat } = this.props;
        unmountChat();
    }

    render() {
        return <div style={{ visibility: 'hidden' }} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    mountChat: (socket: SocketIOClient.Socket) => dispatch(socketMount(socket)),
    unmountChat: () => dispatch(socketUnmount()),
});

export default connect(null, mapDispatchToProps)(HC);
