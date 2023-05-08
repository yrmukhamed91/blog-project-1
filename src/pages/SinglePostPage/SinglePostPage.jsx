import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components'
import styles from './singlepost.module.css'
import postService from '../../services/posts';
import { Button, fabClasses, TextField } from '@mui/material';

const SinglePostWrapper = styled.div`
    width: 70%;
    margin: auto;
    padding: 40px 0;
`

const SinglePostImg = styled.img`
    width: 100%;
    display: block;
    margin: auto;
`

const SinglePostTitle = styled.h1`
    font-size: 48px;
    font-family: 'Roboto', sans-serif;
`

const StatusGreen = styled.div`
    width: 15px; 
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: green;
    margin-right: 10px;
`

const StatusRed = styled.div`
    width: 15px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: red;
    margin-right: 10px;
`

const SinglePostPage = () => {
    const {id} = useParams() // id поста из db.json
    const [post, setPost] = useState({})
    const [editMode, setEditMode] = useState(false)
    const [newName, setNewName] = useState('')
    const [newDuration, setNewDuration] = useState(0)
    const [newImportance, setNewImportance] = useState(false)

    useEffect(() => {
        postService.getPost(id).then(res => setPost(res.data))
    }, []) 

    const handleEditMode = () => {
        setEditMode(true)
        setNewName(post.name)
        setNewDuration(post.duration)
        setNewImportance(post.important)
    }

    const changePost = (e) => {
        axios.patch(`http://localhost:3001/posts/${id}`, {
            name : newName,
            duration : newDuration,
            important : newImportance
        }).then(res => {
            setEditMode(false)
            setPost(res.data)
        })
    }

    const deletePost = () => {
        axios
            .delete(`http://localhost:3001/posts/${id}`)
            .then(res => {
                window.location.href = "/"
            })
    }

    return (
        <SinglePostWrapper>
            <SinglePostImg src="https://picsum.photos/900/400?grayscale" />
            <div className={styles['post-header']}>
                { editMode ? (
                    <>
                    <TextField 
                        variant='outlined'
                        type='text'
                        label="Name"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                    />
                    <Button variant="contained" color="success" onClick={e => changePost(e)}>Сохранить</Button>
                    </>
                ) : (
                    <>
                    <SinglePostTitle>{post.name}</SinglePostTitle>
                    <div className='button-wrapper'>
                        <Button variant="contained" color="success" onClick={handleEditMode}>Редактировать</Button>
                        <Button variant="contained" color="error" onClick={deletePost}>Удалить</Button>
                    </div>
                    </>
                ) }
            </div>
            <hr/>
            {
                editMode ? (
                    <div className={styles['post-info']}>
                        <TextField 
                            variant='outlined'
                            type='number'
                            label="Duration"
                            value={newDuration}
                            onChange={e => setNewDuration(e.target.value)}
                        />
                        { newImportance ? (
                            <Button variant="outlined" color="error" onClick={() => setNewImportance(false)}>Сделать не важным</Button>
                        ) : (
                            <Button variant="outlined" color="success" onClick={() => setNewImportance(true)}>Сделать важным</Button>
                        ) }
                    </div> 
                ) : (
                    <div className={styles['post-info']}>
                        <p className={styles.duration}> Продолжительность: {post.duration} м. </p>
                        <p className={styles.status}> Статус: 
                        {post.important ? (
                            <p className={styles['status-wrapper']}><StatusGreen/>Важный</p> 
                        ) : (
                            <p className={styles['status-wrapper']}><StatusRed/>Не важный</p> 
                        )} 
                        </p>
                    </div>
                )  
            }
            <p>Дополнительная информация по теме</p>
        </SinglePostWrapper>
    );
};

export default SinglePostPage;