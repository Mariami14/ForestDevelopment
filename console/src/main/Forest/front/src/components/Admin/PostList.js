import React from 'react';
import {Admin,Resource} from "react-admin";
import restProvider from 'ra-data-simple-rest'



const PostList = () => {
    return <admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name='posts' list={PostList}/>
    </admin>
};

export default PostList;